import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMUNAL_CONFIG } from '../../core/config/store.config';

@Component({
  selector: 'app-shell-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Barra Superior Limpia y Despejada -->
    <div class="bg-[#02050b] text-slate-400 text-xs py-2 px-4 border-b border-slate-900">
      <div class="container-comunal flex flex-wrap items-center justify-between gap-3">
        <!-- Horario y Estado Comunal -->
        <div class="flex items-center gap-2">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-slate-400 hidden sm:inline">Atención al Vecino:</span>
          <span class="font-medium text-slate-200">{{ config.horarioAtencion }}</span>
        </div>

        <!-- Canales Oficiales y Redes -->
        <div class="flex items-center gap-4 ml-auto">
          <span class="text-slate-500 hidden lg:inline font-medium">Oficial:</span>

          <!-- Facebook -->
          <a
            [href]="config.socialLinks.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            title="Facebook Oficial"
          >
            <svg class="w-3.5 h-3.5 fill-current text-blue-400" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span class="hidden sm:inline">Facebook</span>
          </a>

          <!-- Instagram -->
          <a
            [href]="config.socialLinks.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            title="Instagram Comunal"
          >
            <svg class="w-3.5 h-3.5 fill-current text-pink-400" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span class="hidden sm:inline">Instagram</span>
          </a>

          <!-- YouTube -->
          <a
            [href]="config.socialLinks.youtube"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            title="Canal YouTube de la JAC"
          >
            <svg class="w-3.5 h-3.5 fill-current text-red-500" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span class="hidden sm:inline">YouTube</span>
          </a>

          <!-- WhatsApp Directo -->
          <a
            [href]="whatsappOficialUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 px-3 py-0.5 rounded-full font-semibold transition-all"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>WhatsApp Directo</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Navegación Principal Cómoda y Despejada -->
    <header class="header-main shadow-lg">
      <div class="container-comunal py-3.5 flex items-center justify-between gap-6">
        
        <!-- Logo e Identidad -->
        <a href="#inicio" class="flex items-center gap-3.5 group flex-shrink-0">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
            <div class="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center text-emerald-400">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight m-0">
                {{ config.nombreJAC }}
              </h2>
              <span class="bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full hidden md:inline-block">
                Oficial
              </span>
            </div>
            <p class="text-xs text-emerald-400 font-medium flex items-center gap-1.5 m-0 mt-0.5">
              <span>📍 {{ config.barrio }}</span>
              <span class="text-slate-600 hidden sm:inline">•</span>
              <span class="text-slate-400 hidden sm:inline font-normal">{{ config.localidad }}</span>
            </p>
          </div>
        </a>

        <!-- Menú de Navegación Abierto y Cómodo (Sin encapsular) -->
        <nav class="hidden lg:flex items-center gap-3">
          <a
            href="#inicio"
            class="nav-link-comunal"
          >
            Inicio
          </a>
          <a
            href="#salon-comunal"
            class="nav-link-comunal"
          >
            <span>Salón Comunal</span>
            <span class="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded-full">Reserva</span>
          </a>
          <a
            href="#transparencia"
            class="nav-link-comunal"
          >
            Transparencia & Balances
          </a>
          <a
            href="#voz-barrio"
            class="nav-link-comunal"
          >
            Voz del Barrio
          </a>
          <a
            href="#contacto"
            class="nav-link-comunal"
          >
            Contacto
          </a>
        </nav>

        <!-- Botón CTA Esmeralda Destacado -->
        <div class="hidden sm:flex items-center gap-3 flex-shrink-0">
          <a
            href="#salon-comunal"
            class="btn-emerald-glow text-sm px-5 py-2.5 rounded-xl font-bold flex items-center gap-2"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Reservar Salón</span>
          </a>
        </div>

        <!-- Botón Menú Móvil -->
        <button
          (click)="toggleMenuMovil()"
          type="button"
          class="lg:hidden p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 focus:outline-none"
          aria-label="Abrir navegación"
        >
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            @if (menuMovilAbierto()) {
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            } @else {
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            }
          </svg>
        </button>
      </div>

      <!-- Menú Desplegable Móvil -->
      @if (menuMovilAbierto()) {
        <div class="lg:hidden border-t border-slate-800 bg-[#030712] px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
          <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 font-medium">
            🏛️ <strong>{{ config.nombreJAC }}:</strong> Portal oficial vecinal.
          </div>
          <a
            (click)="cerrarMenuMovil()"
            href="#inicio"
            class="block py-2.5 px-3 text-slate-200 font-semibold rounded-xl hover:bg-slate-900 text-sm"
          >
            🏠 Inicio & Identidad
          </a>
          <a
            (click)="cerrarMenuMovil()"
            href="#salon-comunal"
            class="block py-2.5 px-3 text-slate-200 font-semibold rounded-xl hover:bg-slate-900 text-sm flex items-center justify-between"
          >
            <span>📅 Alquiler y Reserva del Salón</span>
            <span class="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-2 py-0.5 rounded-full">Calendario</span>
          </a>
          <a
            (click)="cerrarMenuMovil()"
            href="#transparencia"
            class="block py-2.5 px-3 text-slate-200 font-semibold rounded-xl hover:bg-slate-900 text-sm"
          >
            📊 Transparencia & Actas en PDF
          </a>
          <a
            (click)="cerrarMenuMovil()"
            href="#voz-barrio"
            class="block py-2.5 px-3 text-slate-200 font-semibold rounded-xl hover:bg-slate-900 text-sm"
          >
            🗣️ La Voz del Barrio & Clasificados
          </a>
          <a
            (click)="cerrarMenuMovil()"
            href="#contacto"
            class="block py-2.5 px-3 text-slate-200 font-semibold rounded-xl hover:bg-slate-900 text-sm"
          >
            📬 Canales Directos & Suscripción
          </a>

          <div class="pt-2">
            <a
              (click)="cerrarMenuMovil()"
              href="#salon-comunal"
              class="w-full btn-emerald-glow text-center font-bold py-3 block rounded-xl shadow-lg"
            >
              📅 Solicitar Reserva del Salón Ahora
            </a>
          </div>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  readonly config = COMUNAL_CONFIG;
  readonly menuMovilAbierto = signal<boolean>(false);

  get whatsappOficialUrl(): string {
    const msg = encodeURIComponent(this.config.whatsappMensajePredeterminado);
    return `https://wa.me/${this.config.whatsappNumber}?text=${msg}`;
  }

  toggleMenuMovil(): void {
    this.menuMovilAbierto.update(v => !v);
  }

  cerrarMenuMovil(): void {
    this.menuMovilAbierto.set(false);
  }
}
