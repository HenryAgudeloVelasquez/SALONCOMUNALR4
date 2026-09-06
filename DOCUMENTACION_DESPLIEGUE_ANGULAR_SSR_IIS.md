# Guía Maestra: Despliegue de Angular v17/v19/v21+ Universal (SSR) en Hosting IIS / SmarterASP / Cloud

Este documento recopila la **arquitectura, configuración y solución definitiva** a todos los problemas comunes al desplegar aplicaciones **Angular con Server-Side Rendering (SSR)** en servidores de hosting basados en **Windows Server / IIS** (SmarterASP.NET, Plesk, cPanel) y plataformas automatizadas de despliegue (**Railpack, Docker, CI/CD**).

Sirve como **plantilla base de referencia** para replicar en cualquier proyecto futuro.

---

## 1. Arquitectura del Despliegue

- **Frontend**: Angular v17 / v19 / v21+ con `@angular/ssr`.
- **Backend SSR**: Servidor Node.js Express generado en `dist/<nombre-proyecto>/server/server.mjs`.
- **Servidor Web Remoto**: Microsoft IIS 8.5 / 10+ administrado mediante el módulo nativo **`httpPlatformHandler`** (o `iisnode`).
- **Mecanismo de Ejecución**: IIS intercepta las peticiones HTTP y las canaliza directamente al proceso Node.js escuchando en un puerto dinámico local (`%HTTP_PLATFORM_PORT%`).

```text
[Cliente Web / Navegador]
           │
           ▼ (Puerto 80 / 443)
   [Microsoft IIS]
           │
  (httpPlatformHandler) ─── Mapea %HTTP_PLATFORM_PORT% a PORT
           │
           ▼
[Node.js Express (server.mjs)] ─── Renderiza Angular SSR + sirve /browser
```

---

## 2. Los 5 Problemas Críticos y sus Soluciones Definitivas

### Problema 1: `exit code: 127` durante `npm run build`
- **Causa**: En contenedores de compilación automatizados (Railpack, Docker, Nixpacks), el comando `ng` no existe en el `PATH` global del sistema operativo, y `npx` puede no estar disponible o fallar en entornos sin terminal interactiva (`sh: 1: ng: not found` -> código 127).
- **Solución**: Invocar directamente el ejecutable local de Node.js asignándole memoria suficiente para evitar bloqueos:
  ```json
  "build": "node --max-old-space-size=2048 ./node_modules/@angular/cli/bin/ng build"
  ```

### Problema 2: `npm ci --omit=dev` omite herramientas de build
- **Causa**: Muchos servidores de hosting configuran `NODE_ENV=production` antes de instalar dependencias, lo que hace que `npm install` o `npm ci` descarte todo lo que esté en `devDependencies`.
- **Solución**: Mover las dependencias esenciales de compilación a `"dependencies"` en `package.json`:
  - `@angular/build`
  - `@angular/cli`
  - `@angular/compiler-cli`
  - `typescript`
  - `@tailwindcss/postcss` / `postcss` / `tailwindcss`

### Problema 3: Error HTTP 500 en IIS / `httpPlatformHandler`
- **Causa**: En Angular v19+, `src/server.ts` viene con una validación `if (isMainModule(import.meta.url))`. Al ser ejecutado por IIS como proceso secundario o mediante subshell, esta condición evalúa como `false`, por lo que **`app.listen()` nunca se ejecuta**, provocando que IIS agote el tiempo de espera y lance `HTTP 500 - Internal Server Error` o `502 - Bad Gateway`.
- **Solución**: Modificar `src/server.ts` para detectar variables de IIS y producción (`APP_POOL_ID`, `HTTP_PLATFORM_PORT`, `PORT` y `NODE_ENV`).

### Problema 4: Error `400 Bad Request` por validación de Host (SSRF)
- **Causa**: Angular 19+ introdujo validación estricta del encabezado `Host` para prevenir ataques de *Server-Side Request Forgery*. Si el host no está en la lista blanca, la petición es rechazada o cae a renderizado en cliente con error.
- **Solución**: Configurar `"allowedHosts"` en `angular.json` autorizando el dominio del hosting, comodines y localhost.

### Problema 5: Tiempo de espera agotado al iniciar (`Timeout`)
- **Causa**: El valor por defecto de 20 o 30 segundos en IIS puede no ser suficiente en servidores compartidos mientras Node carga los paquetes SSR en memoria.
- **Solución**: Configurar `startupTimeLimit="60"` en `web.config`.

---

## 3. Archivos de Configuración Clave

### A. `package.json` (Raíz del proyecto)
```json
{
  "name": "angular-app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "node --import @angular/compiler dist/angular-app/server/server.mjs",
    "start:dev": "ng serve",
    "build": "node --max-old-space-size=2048 ./node_modules/@angular/cli/bin/ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "serve:ssr:angular-app": "node --import @angular/compiler dist/angular-app/server/server.mjs"
  },
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  },
  "private": true,
  "dependencies": {
    "@angular/build": "^21.2.23",
    "@angular/cli": "^21.2.23",
    "@angular/common": "^21.2.0",
    "@angular/compiler": "^21.2.0",
    "@angular/compiler-cli": "^21.2.0",
    "@angular/core": "^21.2.0",
    "@angular/forms": "^21.2.0",
    "@angular/platform-browser": "^21.2.0",
    "@angular/platform-server": "^21.2.0",
    "@angular/router": "^21.2.0",
    "@angular/ssr": "^21.2.23",
    "express": "^5.1.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "typescript": "~5.9.2"
  }
}
```

---

### B. `web.config` (Raíz del sitio en IIS)
> **Importante**: Ajustar la ruta `arguments` según el nombre asignado en `angular.json` (ejemplo: `./dist/angular-app/server/server.mjs` o `./dist/saloncomunal/server/server.mjs`).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <handlers>
      <add name="httpPlatformHandler"
           path="*"
           verb="*"
           modules="httpPlatformHandler"
           resourceType="Unspecified" />
    </handlers>

    <httpPlatform processPath="node"
                  arguments="./dist/angular-app/server/server.mjs"
                  startupTimeLimit="60"
                  startupRetryCount="3"
                  stdoutLogEnabled="true"
                  stdoutLogFile=".\log.txt">
      <environmentVariables>
        <environmentVariable name="PORT" value="%HTTP_PLATFORM_PORT%" />
        <environmentVariable name="NODE_ENV" value="production" />
      </environmentVariables>
    </httpPlatform>

    <security>
      <requestFiltering>
        <requestLimits maxAllowedContentLength="52428800" />
      </requestFiltering>
    </security>
  </system.webServer>
</configuration>
```

---

### C. `src/server.ts` (Punto de Entrada SSR)
```typescript
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// 1. Servir archivos estáticos desde /browser
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// 2. Renderizado SSR de todas las demás rutas
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

// 3. Detección robusta de entorno para arranque del servidor
const isIIS = Boolean(process.env['APP_POOL_ID'] || process.env['HTTP_PLATFORM_PORT']);
const isProductionHosting = Boolean(process.env['PORT'] || process.env['NODE_ENV'] === 'production');

if (isMainModule(import.meta.url) || isIIS || isProductionHosting || process.env['pm_id']) {
  const port = process.env['PORT'] || process.env['HTTP_PLATFORM_PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      console.error('Error al iniciar el servidor Angular SSR:', error);
      throw error;
    }
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
```

---

### D. `angular.json` (Seguridad SSR)
```json
"options": {
  "security": {
    "allowedHosts": [
      "localhost",
      "localhost:*",
      "127.0.0.1",
      "127.0.0.1:*",
      "*.gtempurl.com",
      "*.gtempurl.com:*",
      "*.smarterasp.net",
      "*.smarterasp.net:*",
      "tudominio.com",
      "*.tudominio.com"
    ]
  },
  "ssr": {
    "entry": "src/server.ts"
  }
}
```

---

## 4. Métodos de Despliegue

### Método A: Despliegue Manual por FTP o Administrador de Archivos (Recomendado)
Es el método más confiable en hostings compartidos Windows/IIS porque **no depende de motores Docker ni compiladores en el servidor**:

1. En tu máquina local ejecuta la compilación de producción:
   ```bash
   npm run build
   ```
2. Verifica que la carpeta `dist/<nombre-proyecto>/` contenga:
   - `browser/` (archivos `.js`, `.css`, `index.html`)
   - `server/` (`server.mjs`, `main.server.mjs`)
3. Empaqueta en un archivo `.zip`:
   - Carpeta `dist/`
   - Archivo `web.config`
   - Archivo `package.json`
   - Carpeta `node_modules/` (si el hosting no corre `npm install`)
4. Sube y descomprime el archivo `.zip` en la carpeta raíz del sitio en el hosting (ejemplo `site3` o `www/saloncomunal`).
5. En el panel de control del hosting, asegúrate de tener activado **Node.js** para esa carpeta.
6. Reinicia el **Application Pool** del sitio para asegurar un inicio limpio.

---

### Método B: Despliegue Automatizado (Git / CI/CD)
Si el hosting compila automáticamente al hacer `git push`:
1. Asegúrate de haber confirmado (`git add` y `git commit`) tanto `package.json` como **`package-lock.json`**.
2. Verifica que el script `"build"` sea:
   `"node --max-old-space-size=2048 ./node_modules/@angular/cli/bin/ng build"`.
3. Haz `git push origin tu-rama`.

---

## 5. Comandos de Diagnóstico Rápido en Local

```bash
# 1. Compilar aplicación
npm run build

# 2. Probar servidor SSR localmente en el puerto 4000
npm start

# 3. Probar en un puerto personalizado (PowerShell)
$env:PORT='4005'; npm start

# 4. Comprobar que devuelve HTML renderizado por el servidor
curl http://localhost:4005/
```
