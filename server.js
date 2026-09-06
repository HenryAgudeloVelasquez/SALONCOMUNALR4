// Servidor de producción para despliegue en la nube (SmarterASP, Railway, Railpack, etc.)
// Carga el bundle SSR generado por Angular en dist/angular-app/server/server.mjs

import('./dist/angular-app/server/server.mjs')
  .then(() => {
    console.log('✓ Servidor Angular SSR iniciado correctamente.');
  })
  .catch((err) => {
    console.error('❌ Error al iniciar el servidor Angular SSR:', err);
    process.exit(1);
  });
