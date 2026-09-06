import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComunalService } from '../../core/services/comunal.service';
import { COMUNAL_CONFIG } from '../../core/config/store.config';
import { PublicacionVozBarrio, TipoVoz } from '../../core/models/comunal.models';

@Component({
  selector: 'app-voz-barrio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="voz-barrio" class="py-20 bg-[#020617] border-t border-slate-900">
      <div class="container-comunal">
        
        <!-- Encabezado de la Sección -->
        <div class="max-w-3xl mx-auto text-center mb-14">
          <div class="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Participación Ciudadana Activa</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            La Voz del Barrio & Clasificados Vecinales
          </h2>
          <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
            Un espacio libre para apoyar los emprendimientos de la cuadra, revivir la memoria de nuestros fundadores y reportar alertas comunitarias con moderación de la Junta.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Columna Izquierda: Muro de Publicaciones (lg:col-span-7) -->
          <div class="lg:col-span-7 space-y-6">
            <!-- Pestañas Filtro Estilo Dark Minimalist -->
            <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              <button
                (click)="filtroTipo.set('todos')"
                [class.bg-emerald-500]="filtroTipo() === 'todos'"
                [class.text-slate-950]="filtroTipo() === 'todos'"
                [class.text-slate-300]="filtroTipo() !== 'todos'"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
              >
                Todas las Notas
              </button>
              <button
                (click)="filtroTipo.set('noticia')"
                [class.bg-emerald-500]="filtroTipo() === 'noticia'"
                [class.text-slate-950]="filtroTipo() === 'noticia'"
                [class.text-slate-300]="filtroTipo() !== 'noticia'"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
              >
                📢 Noticias JAC
              </button>
              <button
                (click)="filtroTipo.set('emprendimiento')"
                [class.bg-emerald-500]="filtroTipo() === 'emprendimiento'"
                [class.text-slate-950]="filtroTipo() === 'emprendimiento'"
                [class.text-slate-300]="filtroTipo() !== 'emprendimiento'"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
              >
                🛍️ Emprendimientos
              </button>
              <button
                (click)="filtroTipo.set('cronica')"
                [class.bg-emerald-500]="filtroTipo() === 'cronica'"
                [class.text-slate-950]="filtroTipo() === 'cronica'"
                [class.text-slate-300]="filtroTipo() !== 'cronica'"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
              >
                📖 Crónicas
              </button>
              <button
                (click)="filtroTipo.set('alerta')"
                [class.bg-emerald-500]="filtroTipo() === 'alerta'"
                [class.text-slate-950]="filtroTipo() === 'alerta'"
                [class.text-slate-300]="filtroTipo() !== 'alerta'"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
              >
                🔔 Alertas
              </button>
            </div>

            <!-- Lista de Artículos del Muro en Clean Dark -->
            <div class="space-y-6">
              @for (pub of publicacionesFiltradas(); track pub.id) {
                <article class="card-clean-dark bg-[#0b1120]/90 overflow-hidden border border-slate-800 transition-all">
                  @if (pub.imagenUrl) {
                    <div class="w-full h-52 sm:h-64 overflow-hidden bg-slate-950 relative">
                      <img
                        [src]="pub.imagenUrl"
                        [alt]="pub.titulo"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div class="absolute top-3.5 left-3.5 flex items-center gap-2">
                        <span class="bg-[#020617]/90 text-emerald-400 border border-emerald-500/30 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                          {{ pub.etiqueta }}
                        </span>
                        @if (pub.estado === 'revision') {
                          <span class="bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                            ⏳ En revisión previa
                          </span>
                        }
                      </div>
                    </div>
                  }

                  <div class="p-6 sm:p-7">
                    <!-- Autor con Avatar de Iniciales -->
                    <div class="flex items-center justify-between gap-3 mb-3">
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs shadow-xs">
                          {{ pub.autor.charAt(0) }}
                        </div>
                        <div>
                          <span class="text-xs font-bold text-slate-200 block leading-tight">{{ pub.autor }}</span>
                          <span class="text-[11px] text-slate-500 font-medium">{{ pub.fecha }}</span>
                        </div>
                      </div>
                      
                      @if (pub.direccionVecino) {
                        <span class="text-[11px] text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full font-medium hidden sm:inline-block">
                          📍 {{ pub.direccionVecino }}
                        </span>
                      }
                    </div>

                    <h3 class="text-xl font-bold text-white mb-2 leading-snug tracking-tight">
                      {{ pub.titulo }}
                    </h3>

                    <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {{ pub.contenido }}
                    </p>

                    @if (pub.contacto) {
                      <div class="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between">
                        <span class="text-xs font-semibold text-slate-400">Contacto Vecinal:</span>
                        <a
                          [href]="'https://wa.me/57' + pub.contacto.replace(' ', '')"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="btn-dark-secondary text-xs py-1.5 px-3 flex items-center gap-1.5 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10"
                        >
                          <span>💬 WhatsApp: {{ pub.contacto }}</span>
                        </a>
                      </div>
                    }
                  </div>
                </article>
              }
            </div>
          </div>

          <!-- Columna Derecha: Formulario Participativo (lg:col-span-5) -->
          <div class="lg:col-span-5 card-clean-dark p-6 sm:p-8 bg-[#0b1120]/90 border border-slate-800 sticky top-24 shadow-xl">
            <div class="border-b border-slate-800 pb-4 mb-6">
              <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Tu voz construye comunidad
              </span>
              <h3 class="text-2xl font-extrabold text-white mt-0.5">
                Participa y Publica
              </h3>
              <p class="text-xs text-slate-400 mt-1">
                Comparte una historia, un reconocimiento o tu emprendimiento para publicarlo tras revisión de la junta.
              </p>
            </div>

            <form (submit)="enviarPublicacion($event)" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-300 uppercase mb-1">
                  ¿Qué deseas compartir? *
                </label>
                <select [(ngModel)]="tipoAporte" name="tipoAporte" class="input-dark-clean text-sm">
                  <option value="emprendimiento">🛍️ Emprendimiento o Clasificado del Barrio</option>
                  <option value="cronica">📖 Historia, Anécdota o Reconocimiento Vecinal</option>
                  <option value="alerta">🔔 Alerta Comunitaria o Sugerencia de Convivencia</option>
                  <option value="noticia">📢 Noticia o Convocatoria de Cuadra</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Título de tu Publicación *
                </label>
                <input
                  type="text"
                  [(ngModel)]="titulo"
                  name="titulo"
                  required
                  placeholder="Ej. Taller de costura comunitaria en la casa 18"
                  class="input-dark-clean text-sm"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    [(ngModel)]="autor"
                    name="autor"
                    required
                    placeholder="Nombre y Apellido"
                    class="input-dark-clean text-sm"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Dirección en el Barrio
                  </label>
                  <input
                    type="text"
                    [(ngModel)]="direccionVecino"
                    name="direccionVecino"
                    placeholder="Ej. Mz 4 Casa 8"
                    class="input-dark-clean text-sm"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Descripción o Historia *
                </label>
                <textarea
                  [(ngModel)]="contenido"
                  name="contenido"
                  rows="3"
                  required
                  placeholder="Cuéntanos con claridad los detalles para que todos los vecinos puedan comprender tu mensaje..."
                  class="input-dark-clean text-sm"
                ></textarea>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Enlace de Foto (URL)
                  </label>
                  <input
                    type="url"
                    [(ngModel)]="imagenUrl"
                    name="imagenUrl"
                    placeholder="https://images.unsplash..."
                    class="input-dark-clean text-sm"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    [(ngModel)]="contacto"
                    name="contacto"
                    placeholder="310 123 4567"
                    class="input-dark-clean text-sm"
                  />
                </div>
              </div>

              <div class="p-3 bg-emerald-950/40 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-start gap-2">
                <span>🛡️</span>
                <span>
                  <strong>Moderación Comunitaria:</strong> La junta revisará previamente que el contenido respete la convivencia vecinal.
                </span>
              </div>

              @if (mensajeExito()) {
                <div class="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-xs font-bold text-emerald-300 animate-fade-in">
                  {{ mensajeExito() }}
                </div>
              }

              <button
                type="submit"
                class="w-full btn-emerald-glow text-sm font-black py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>Enviar para Aprobación de la Junta</span>
                <span>📤</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class VozBarrioComponent {
  readonly comunalService = inject(ComunalService);
  readonly config = COMUNAL_CONFIG;

  filtroTipo = signal<TipoVoz | 'todos'>('todos');

  // Formulario
  tipoAporte: TipoVoz = 'emprendimiento';
  titulo = '';
  autor = '';
  direccionVecino = '';
  contenido = '';
  imagenUrl = '';
  contacto = '';
  mensajeExito = signal<string | null>(null);

  publicacionesFiltradas(): PublicacionVozBarrio[] {
    const filtro = this.filtroTipo();
    const pubs = this.comunalService.publicacionesVoz();
    if (filtro === 'todos') return pubs;
    return pubs.filter(p => p.tipo === filtro);
  }

  enviarPublicacion(e: Event): void {
    e.preventDefault();
    if (!this.titulo || !this.autor || !this.contenido) return;

    this.comunalService.subirAporteVecinal({
      tipo: this.tipoAporte,
      titulo: this.titulo,
      autor: this.autor,
      direccionVecino: this.direccionVecino,
      contenido: this.contenido,
      imagenUrl: this.imagenUrl || 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=700&auto=format&fit=crop&q=80',
      contacto: this.contacto
    });

    this.mensajeExito.set('¡Tu aporte ha sido recibido! Ya está visible en tu pantalla con estado "En revisión previa" y ha sido radicado para la junta.');
    this.titulo = '';
    this.contenido = '';
    this.contacto = '';
    setTimeout(() => this.mensajeExito.set(null), 8000);
  }
}
