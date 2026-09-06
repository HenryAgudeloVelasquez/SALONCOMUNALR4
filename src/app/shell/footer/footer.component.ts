import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COMUNAL_CONFIG } from '../../core/config/store.config';
import { ComunalService } from '../../core/services/comunal.service';

@Component({
  selector: 'app-shell-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <footer id="contacto" class="bg-[#020617] text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div class="container-comunal">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          <!-- Columna 1: Identidad y Lema -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-slate-950 font-black text-base shadow-md">
                JAC
              </div>
              <div>
                <h3 class="text-lg font-extrabold text-white leading-tight tracking-tight">{{ config.nombreJAC }}</h3>
                <p class="text-xs text-emerald-400 font-semibold">{{ config.barrio }}</p>
              </div>
            </div>
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {{ config.lema }}. Promovemos la participación ciudadana, la transparencia y el cuidado de los espacios colectivos.
            </p>
            <div class="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Personería Jurídica Comunal Vigente</span>
            </div>
          </div>

          <!-- Columna 2: Canales de Atención & Salón Comunal -->
          <div class="space-y-3">
            <h4 class="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span>📍 Canales & Salón Comunal</span>
            </h4>
            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">🏠</span>
                <span>{{ config.direccionSalon }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">🕒</span>
                <span>{{ config.horarioAtencion }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">📞</span>
                <span>Teléfono / WhatsApp: {{ config.whatsappDisplay }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">✉️</span>
                <span class="break-all">{{ config.emailOficial }}</span>
              </li>
            </ul>
          </div>

          <!-- Columna 3: Enlaces Rápidos y Redes Oficiales -->
          <div class="space-y-3">
            <h4 class="text-white font-bold text-sm uppercase tracking-wider">
              🌐 Redes & Participación
            </h4>
            <div class="space-y-2.5 text-xs sm:text-sm">
              <a [href]="config.socialLinks.facebook" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span class="text-blue-400">📘</span> Facebook Oficial
              </a>
              <a [href]="config.socialLinks.instagram" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span class="text-pink-400">📷</span> Instagram Comunal
              </a>
              <a [href]="config.socialLinks.youtube" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span class="text-red-400">📺</span> Canal de YouTube (Asambleas)
              </a>
              <a [href]="whatsappOficialUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                <span class="text-emerald-400">💬</span> Chat de WhatsApp Vecinal
              </a>
            </div>
          </div>

          <!-- Columna 4: Suscripción a Circulares Comunitarias -->
          <div class="space-y-3">
            <h4 class="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span>📬 Circulares por Correo</span>
            </h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Recibe actas, convocatorias a asambleas y alertas de seguridad directo en tu correo Gmail.
            </p>

            <form (submit)="suscribirse($event)" class="space-y-2">
              <input
                type="text"
                [(ngModel)]="nombreVecino"
                name="nombreVecino"
                placeholder="Tu nombre completo"
                class="input-dark-clean text-xs py-2.5"
                required
              />
              <input
                type="email"
                [(ngModel)]="emailVecino"
                name="emailVecino"
                placeholder="correo@ejemplo.com"
                class="input-dark-clean text-xs py-2.5"
                required
              />
              <button
                type="submit"
                class="w-full btn-emerald-glow text-xs py-2.5 px-4 font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>Inscribirme al Boletín</span>
                <span>→</span>
              </button>
            </form>

            @if (mensajeSuscripcion()) {
              <div class="p-2.5 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 animate-fade-in">
                {{ mensajeSuscripcion() }}
              </div>
            }
          </div>
        </div>

        <!-- Barra Inferior de Derechos y Convivencia -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {{ config.nombreJAC }} - {{ config.barrio }}. Todos los derechos reservados.</p>
          <div class="flex items-center gap-4">
            <a href="#transparencia" class="hover:text-slate-400 transition-colors">Estatutos de la JAC</a>
            <span>•</span>
            <a href="#salon-comunal" class="hover:text-slate-400 transition-colors">Manual de Convivencia</a>
            <span>•</span>
            <span class="text-emerald-400 font-semibold">Gobierno Abierto & Cuentas Claras</span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly config = COMUNAL_CONFIG;
  private readonly comunalService = inject(ComunalService);

  nombreVecino = '';
  emailVecino = '';
  readonly mensajeSuscripcion = signal<string | null>(null);

  get whatsappOficialUrl(): string {
    const msg = encodeURIComponent(this.config.whatsappMensajePredeterminado);
    return `https://wa.me/${this.config.whatsappNumber}?text=${msg}`;
  }

  suscribirse(e: Event): void {
    e.preventDefault();
    if (!this.emailVecino) return;
    const res = this.comunalService.registrarSuscripcion(this.emailVecino, this.nombreVecino);
    this.mensajeSuscripcion.set(res.mensaje);
    if (res.exito) {
      this.nombreVecino = '';
      this.emailVecino = '';
      setTimeout(() => this.mensajeSuscripcion.set(null), 8000);
    }
  }
}
