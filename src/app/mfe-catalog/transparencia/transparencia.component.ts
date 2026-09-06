import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunalService } from '../../core/services/comunal.service';
import { COMUNAL_CONFIG } from '../../core/config/store.config';
import { DocumentoTransparencia, CategoriaDocumento } from '../../core/models/comunal.models';

@Component({
  selector: 'app-transparencia',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="transparencia" class="py-24 bg-[#050b18] border-t border-slate-900">
      <div class="container-comunal">
        
        <!-- Encabezado de la Sección -->
        <div class="max-w-3xl mx-auto text-center mb-14">
          <div class="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Gobierno Abierto & Cuentas Claras</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Transparencia y Resultados a la Comunidad
          </h2>
          <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
            Cada peso recaudado y cada obra realizada le pertenece a los vecinos. Consulta nuestras metas alcanzadas y descarga las actas oficiales de asamblea y balances de tesorería en PDF.
          </p>
        </div>

        <!-- Panel de Cifras y Logros Comunitarios en Dark Clean -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          @for (logro of comunalService.logros(); track logro.id) {
            <div class="card-clean-dark p-6 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-[11px] font-extrabold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 uppercase tracking-wide">
                    {{ logro.categoria }}
                  </span>
                  <div class="w-11 h-11 rounded-2xl bg-slate-900 group-hover:bg-emerald-950/60 text-slate-300 group-hover:text-emerald-400 border border-slate-800 flex items-center justify-center font-bold text-xl transition-colors shadow-xs">
                    @switch (logro.icono) {
                      @case ('road') { 🛣️ }
                      @case ('tree') { 🌳 }
                      @case ('users') { 👥 }
                      @case ('chart') { 📈 }
                      @default { 🏆 }
                    }
                  </div>
                </div>

                <div class="mt-1 mb-2">
                  <span class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {{ logro.cifra }}
                  </span>
                  <span class="text-xs text-slate-400 font-bold block mt-0.5 uppercase tracking-wide">
                    {{ logro.unidad }}
                  </span>
                </div>

                <h4 class="text-base font-bold text-white mt-2 mb-1.5 leading-snug">
                  {{ logro.titulo }}
                </h4>
                <p class="text-xs text-slate-400 leading-relaxed">
                  {{ logro.descripcion }}
                </p>
              </div>

              <!-- Barra de Cumplimiento -->
              <div class="mt-5 pt-3 border-t border-slate-800">
                <div class="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                  <span>Cumplimiento del Plan</span>
                  <span class="text-emerald-400 font-extrabold">{{ logro.progreso }}%</span>
                </div>
                <div class="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                  <div
                    class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-700 shadow-xs"
                    [style.width.%]="logro.progreso"
                  ></div>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Módulo de Descargas de Documentos Oficiales en PDF (Clean Dark) -->
        <div class="card-clean-dark p-6 sm:p-9 bg-[#0b1120]/90 border border-slate-800">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <span class="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                Archivo Digital Público
              </span>
              <h3 class="text-2xl font-extrabold text-white mt-0.5">
                Actas de Asamblea, Balances e Informes de Gestión
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                Consulta libre para cualquier habitante del sector sin contraseñas ni intermediarios.
              </p>
            </div>

            <!-- Filtros Píldora en Dark Surface -->
            <div class="flex flex-wrap items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              <button
                (click)="cambiarFiltro('todos')"
                [class.bg-emerald-500]="comunalService.filtroDocumento() === 'todos'"
                [class.text-slate-950]="comunalService.filtroDocumento() === 'todos'"
                [class.text-slate-300]="comunalService.filtroDocumento() !== 'todos'"
                class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all"
              >
                Todos ({{ comunalService.documentos().length }})
              </button>
              <button
                (click)="cambiarFiltro('acta')"
                [class.bg-emerald-500]="comunalService.filtroDocumento() === 'acta'"
                [class.text-slate-950]="comunalService.filtroDocumento() === 'acta'"
                [class.text-slate-300]="comunalService.filtroDocumento() !== 'acta'"
                class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all"
              >
                📜 Actas
              </button>
              <button
                (click)="cambiarFiltro('balance')"
                [class.bg-emerald-500]="comunalService.filtroDocumento() === 'balance'"
                [class.text-slate-950]="comunalService.filtroDocumento() === 'balance'"
                [class.text-slate-300]="comunalService.filtroDocumento() !== 'balance'"
                class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all"
              >
                💰 Balances
              </button>
              <button
                (click)="cambiarFiltro('informe')"
                [class.bg-emerald-500]="comunalService.filtroDocumento() === 'informe'"
                [class.text-slate-950]="comunalService.filtroDocumento() === 'informe'"
                [class.text-slate-300]="comunalService.filtroDocumento() !== 'informe'"
                class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all"
              >
                📑 Informes
              </button>
            </div>
          </div>

          <!-- Lista de Documentos Estilo Clean Dark -->
          <div class="space-y-4">
            @for (doc of comunalService.documentosFiltrados(); track doc.id) {
              <div class="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <!-- Columna de Contenido e Información (flex-1 min-w-0 para ocupar todo el ancho) -->
                <div class="flex items-start gap-4 flex-1 min-w-0">
                  <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-800/50 text-red-400 flex flex-col items-center justify-center font-black flex-shrink-0 shadow-sm p-2">
                    <span class="text-xs leading-none font-bold">PDF</span>
                    <span class="text-[10px] text-red-300 font-semibold mt-1">{{ doc.tamano }}</span>
                  </div>
                  
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        [class.bg-emerald-950]="doc.categoria === 'acta'"
                        [class.text-emerald-400]="doc.categoria === 'acta'"
                        [class.border-emerald-800]="doc.categoria === 'acta'"
                        [class.bg-blue-950]="doc.categoria === 'balance'"
                        [class.text-blue-400]="doc.categoria === 'balance'"
                        [class.border-blue-800]="doc.categoria === 'balance'"
                        [class.bg-amber-950]="doc.categoria === 'informe'"
                        [class.text-amber-400]="doc.categoria === 'informe'"
                        [class.border-amber-800]="doc.categoria === 'informe'"
                        class="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border"
                      >
                        {{ doc.categoria }}
                      </span>
                      <span class="text-xs text-slate-400 font-medium">• {{ doc.periodo }}</span>
                      <span class="text-xs text-slate-500">({{ doc.fecha }})</span>
                    </div>

                    <h4 class="text-base sm:text-lg font-bold text-white leading-snug mb-1">
                      {{ doc.titulo }}
                    </h4>
                    
                    <p class="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {{ doc.descripcion }}
                    </p>
                    
                    <div class="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5 font-medium">
                      <span>✍️</span>
                      <span><strong>Firmado por:</strong> {{ doc.firmadoPor }}</span>
                    </div>
                  </div>
                </div>

                <!-- Botones de Acción (Sin encogerse ni recortarse) -->
                <div class="flex items-center gap-3 flex-shrink-0 pt-2 md:pt-0">
                  <button
                    type="button"
                    (click)="abrirVisor(doc)"
                    class="btn-dark-secondary text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center gap-1.5 whitespace-nowrap"
                    title="Ver resumen oficial"
                  >
                    <span>👁️ Ver Resumen</span>
                  </button>

                  <button
                    type="button"
                    (click)="descargar(doc)"
                    class="btn-emerald-glow text-xs sm:text-sm py-2.5 px-4 rounded-xl font-bold flex items-center gap-2 shadow-sm whitespace-nowrap"
                    title="Descargar documento PDF"
                  >
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Descargar PDF</span>
                    <span class="text-[10px] bg-slate-950 text-emerald-400 px-1.5 py-0.5 rounded-full ml-1 font-bold">
                      {{ doc.descargas }}
                    </span>
                  </button>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Modal de Consulta Rápida de Documento (Dark Clean) -->
        @if (documentoSeleccionado()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
            <div class="bg-slate-900 rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-800">
              <div class="bg-[#020617] text-white p-6 flex items-center justify-between border-b border-slate-800">
                <div>
                  <span class="text-[11px] uppercase text-emerald-400 font-bold tracking-wider block">
                    Documento Público Comunitario
                  </span>
                  <h3 class="text-lg font-bold tracking-tight mt-0.5">
                    {{ documentoSeleccionado()?.titulo }}
                  </h3>
                </div>
                <button
                  (click)="cerrarVisor()"
                  class="text-slate-400 hover:text-white text-2xl font-bold p-1 leading-none transition-colors"
                >
                  ✕
                </button>
              </div>

              <div class="p-6 space-y-4">
                <div class="grid grid-cols-2 gap-3 text-xs bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-slate-300">
                  <div><strong>Periodo:</strong> {{ documentoSeleccionado()?.periodo }}</div>
                  <div><strong>Fecha Oficial:</strong> {{ documentoSeleccionado()?.fecha }}</div>
                  <div><strong>Categoría:</strong> {{ documentoSeleccionado()?.categoria | uppercase }}</div>
                  <div><strong>Tamaño:</strong> {{ documentoSeleccionado()?.tamano }}</div>
                </div>

                <div>
                  <h5 class="text-xs font-bold text-slate-300 uppercase mb-1.5">Resumen de la Rendición de Cuentas:</h5>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                    {{ documentoSeleccionado()?.descripcion }}
                  </p>
                </div>

                <div class="text-xs text-slate-400 flex items-center gap-1.5">
                  <span>🔒 Certificado por:</span>
                  <strong class="text-slate-200">{{ documentoSeleccionado()?.firmadoPor }}</strong>
                </div>

                <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    (click)="cerrarVisor()"
                    class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs sm:text-sm rounded-xl"
                  >
                    Cerrar
                  </button>
                  <button
                    (click)="descargar(documentoSeleccionado()!)"
                    class="btn-emerald-glow text-xs sm:text-sm py-2 px-4 shadow-sm"
                  >
                    <span>Descargar Documento Oficial</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class TransparenciaComponent {
  readonly comunalService = inject(ComunalService);
  readonly config = COMUNAL_CONFIG;

  readonly documentoSeleccionado = signal<DocumentoTransparencia | null>(null);

  cambiarFiltro(filtro: CategoriaDocumento | 'todos'): void {
    this.comunalService.filtroDocumento.set(filtro);
  }

  descargar(doc: DocumentoTransparencia): void {
    this.comunalService.descargarDocumento(doc);
  }

  abrirVisor(doc: DocumentoTransparencia): void {
    this.documentoSeleccionado.set(doc);
  }

  cerrarVisor(): void {
    this.documentoSeleccionado.set(null);
  }
}
