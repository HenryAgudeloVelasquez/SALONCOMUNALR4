import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMUNAL_CONFIG } from '../core/config/store.config';
import { ReservaSalonComponent } from './reserva-salon/reserva-salon.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { VozBarrioComponent } from './voz-barrio/voz-barrio.component';

@Component({
  selector: 'app-catalog-view',
  standalone: true,
  imports: [
    CommonModule,
    ReservaSalonComponent,
    TransparenciaComponent,
    VozBarrioComponent
  ],
  template: `
    <div class="comunal-portal text-slate-100">
      <!-- SECCIÓN 1: BIENVENIDA E IDENTIDAD DEL BARRIO (HERO ESPACIOSO Y MODERNO) -->
      <section id="inicio" class="relative py-20 lg:py-28 overflow-hidden border-b border-slate-900 bg-[#020617]">
        <!-- Luz Ambiental Esmeralda Difusa -->
        <div class="absolute top-0 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="container-comunal relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <!-- Columna de Texto & Acción (lg:col-span-7) -->
            <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
              
              <!-- Insignia Píldora Esmeralda -->
              <div class="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Portal Oficial Comunitario • {{ config.localidad }}</span>
              </div>

              <!-- Titular Principal con Degradado Esmeralda -->
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {{ config.nombreJAC }} <br />
                <span class="text-gradient-emerald">
                  {{ config.barrio }}
                </span>
              </h1>

              <!-- Descripción con Excelente Legibilidad -->
              <p class="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {{ config.lema }}. Gestiona la reserva del salón comunal con calendario interactivo, revisa la rendición de cuentas en PDF y participa activamente en tu comunidad.
              </p>

              <!-- Botones de Acción Destacados con Buen Margen -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#salon-comunal"
                  class="w-full sm:w-auto btn-emerald-glow text-base py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl"
                >
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Reservar Salón Comunal</span>
                </a>

                <a
                  [href]="whatsappOficialUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full sm:w-auto btn-dark-secondary text-base py-4 px-7 rounded-xl flex items-center justify-center gap-2.5"
                >
                  <span class="text-xl">💬</span>
                  <span>WhatsApp Oficial JAC</span>
                </a>
              </div>

              <!-- Fila de Métricas Comunitarias Limpia y Espaciosa (Sin cajas pesadas) -->
              <div class="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12">
                <div class="flex items-center gap-3.5">
                  <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                    ✓
                  </div>
                  <div class="text-left">
                    <div class="text-2xl sm:text-3xl font-black text-white leading-none">100%</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">Cuentas Claras en PDF</div>
                  </div>
                </div>

                <div class="w-px h-10 bg-slate-800 hidden sm:block"></div>

                <div class="flex items-center gap-3.5">
                  <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                    👥
                  </div>
                  <div class="text-left">
                    <div class="text-2xl sm:text-3xl font-black text-white leading-none">80+</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">Capacidad en Salón</div>
                  </div>
                </div>

                <div class="w-px h-10 bg-slate-800 hidden sm:block"></div>

                <div class="flex items-center gap-3.5">
                  <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                    ⚡
                  </div>
                  <div class="text-left">
                    <div class="text-2xl sm:text-3xl font-black text-white leading-none">24/7</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">Canal de Atención</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Columna Galería Fotográfica Limpia & Elegante (lg:col-span-5) -->
            <div class="lg:col-span-5">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/25 group bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&auto=format&fit=crop&q=80"
                  alt="Instalaciones del Salón Comunal y Parque de Los Rosales"
                  class="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <!-- Badge Flotante Superior -->
                <div class="absolute top-4 left-4 z-10">
                  <span class="inline-flex items-center gap-2 bg-[#020617]/90 backdrop-blur-md text-emerald-400 border border-emerald-500/40 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>SEDE OFICIAL Y PARQUE CENTRAL</span>
                  </span>
                </div>

                <!-- Tarjeta de Contenido Inferior con Vidrio Esmerilado -->
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020617] via-[#020617]/85 to-transparent p-6 sm:p-7 text-white">
                  <h3 class="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                    Salón Comunal & Entorno Recreativo
                  </h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    Espacio dotado con mobiliario completo, cocineta equipada, sonido básico y amplias zonas verdes para eventos familiares y comunitarios.
                  </p>
                  
                  <!-- Chips de Servicios -->
                  <div class="flex flex-wrap gap-2 pt-1">
                    <span class="bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-slate-300 px-2.5 py-1 rounded-lg">
                      🪑 80 Sillas y 10 Mesas
                    </span>
                    <span class="bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-slate-300 px-2.5 py-1 rounded-lg">
                      🍳 Cocineta Dotada
                    </span>
                    <span class="bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-slate-300 px-2.5 py-1 rounded-lg">
                      🌳 Parque Familiar
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- BARRA DE CONVOCATORIA LIMPIA -->
      <div class="bg-[#050b18] border-b border-slate-800 text-slate-200 text-sm py-4 px-4 shadow-sm">
        <div class="container-comunal flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="badge-amber-pill">
              📢 CONVOCATORIA
            </span>
            <span class="font-bold text-white">Próxima Asamblea General Ordinaria:</span>
            <span class="text-slate-300 hidden md:inline">Domingo 27 de Septiembre, 9:00 AM en el Salón Comunal.</span>
          </div>
          <a href="#transparencia" class="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors ml-auto text-sm">
            <span>Ver Orden del Día en PDF</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <!-- SECCIÓN 2: ALQUILER Y RESERVA DEL SALÓN COMUNAL -->
      <app-reserva-salon />

      <!-- SECCIÓN 3: TRANSPARENCIA Y RENDICIÓN DE CUENTAS EN PDF -->
      <app-transparencia />

      <!-- SECCIÓN 4: LA VOZ DEL BARRIO Y CLASIFICADOS VECINALES -->
      <app-voz-barrio />

      <!-- SECCIÓN 5: RED DE SEGURIDAD Y CONTACTO CON AUTORIDADES -->
      <section class="py-20 border-t border-slate-900 bg-[#020617]" id="contacto">
        <div class="container-comunal">
          <div class="card-clean-dark p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div class="space-y-3 text-center md:text-left relative z-10">
              <span class="badge-emerald-pill">
                🛡️ Directorio y Seguridad del Cuadrante
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                ¿Necesitas contactar a las autoridades del sector?
              </h3>
              <p class="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Línea directa del CAI del cuadrante, ambulancia y bomberos disponibles las 24 horas para la protección y tranquilidad de nuestros vecinos.
              </p>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-4 relative z-10 flex-shrink-0">
              <a
                href="tel:123"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>🚨 Emergencias: 123</span>
              </a>
              <a
                [href]="whatsappOficialUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-emerald-glow text-sm py-3.5 px-6 font-bold shadow-md"
              >
                <span>💬 Escribir al Presidente JAC</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class CatalogViewComponent {
  readonly config = COMUNAL_CONFIG;

  get whatsappOficialUrl(): string {
    const msg = encodeURIComponent(this.config.whatsappMensajePredeterminado);
    return `https://wa.me/${this.config.whatsappNumber}?text=${msg}`;
  }
}
