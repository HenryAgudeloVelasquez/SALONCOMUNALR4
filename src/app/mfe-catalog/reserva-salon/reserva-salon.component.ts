import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComunalService } from '../../core/services/comunal.service';
import { COMUNAL_CONFIG } from '../../core/config/store.config';
import { TipoEvento, HorarioReserva } from '../../core/models/comunal.models';

@Component({
  selector: 'app-reserva-salon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="salon-comunal" class="py-20 bg-[#020617] border-t border-slate-900 relative">
      <div class="container-comunal">
        
        <!-- Encabezado de la Sección -->
        <div class="max-w-3xl mx-auto text-center mb-14">
          <div class="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Espacio Comunitario para el Encuentro</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Alquiler y Reserva del Salón Comunal
          </h2>
          <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
            Un espacio dotado y seguro para tus celebraciones familiares, asambleas y talleres. Consulta la disponibilidad en vivo y agenda tu solicitud en minutos.
          </p>
        </div>

        <!-- Tarjetas Informativas de Dotación en Tonos Oscuros Limpios -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="card-clean-dark p-6 flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-2xl flex-shrink-0 shadow-xs">
              👥
            </div>
            <div>
              <h4 class="font-bold text-white text-base mb-1">Capacidad & Dotación</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Hasta 80 personas cómodas. Incluye 80 sillas plásticas, 10 mesas rectangulares, tarima comunal y sonido básico.
              </p>
            </div>
          </div>

          <div class="card-clean-dark p-6 flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center text-2xl flex-shrink-0 shadow-xs">
              🍳
            </div>
            <div>
              <h4 class="font-bold text-white text-base mb-1">Cocineta & Servicios</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Área de cocineta para calentar alimentos, nevera comunitaria y baños independientes para damas y caballeros.
              </p>
            </div>
          </div>

          <div class="card-clean-dark p-6 flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-500/30 text-amber-400 flex items-center justify-center text-2xl flex-shrink-0 shadow-xs">
              🤝
            </div>
            <div>
              <h4 class="font-bold text-white text-base mb-1">Tarifa Vecinal Solidaria</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Tarifa preferencial para vecinos. Los aportes recaudados se reinvierten en aseo y mejoras continuas de la sede.
              </p>
            </div>
          </div>
        </div>

        <!-- Cuadrícula Principal: Calendario en Vivo + Formulario Accesible -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Columna del Calendario Interactivo (lg:col-span-5) -->
          <div class="lg:col-span-5 card-clean-dark p-6 sm:p-7 bg-[#0b1120]/90 border border-slate-800">
            <!-- Selector de Mes -->
            <div class="flex items-center justify-between mb-5 pb-4 border-b border-slate-800">
              <div>
                <span class="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                  Disponibilidad en Vivo
                </span>
                <h3 class="text-xl font-extrabold text-white mt-0.5">
                  {{ comunalService.nombreMesActual() }}
                </h3>
              </div>
              <div class="flex items-center gap-1.5">
                <button
                  type="button"
                  (click)="comunalService.mesAnterior()"
                  class="p-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 transition-all hover:scale-105"
                  aria-label="Mes anterior"
                >
                  ◀
                </button>
                <button
                  type="button"
                  (click)="comunalService.mesSiguiente()"
                  class="p-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 transition-all hover:scale-105"
                  aria-label="Mes siguiente"
                >
                  ▶
                </button>
              </div>
            </div>

            <!-- Leyenda de Estados Visuales -->
            <div class="grid grid-cols-3 gap-2 p-2.5 bg-slate-950/80 rounded-xl text-xs font-semibold text-slate-400 mb-5 border border-slate-800/80">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-xs"></span>
                <span>Libre</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500 shadow-xs"></span>
                <span>Ocupado</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-xs"></span>
                <span>En trámite</span>
              </div>
            </div>

            <!-- Días de la semana -->
            <div class="grid grid-cols-7 text-center font-bold text-slate-500 text-xs py-1.5 mb-1 tracking-wider uppercase">
              <span>Dom</span>
              <span>Lun</span>
              <span>Mar</span>
              <span>Mié</span>
              <span>Jue</span>
              <span>Vie</span>
              <span>Sáb</span>
            </div>

            <!-- Cuadrícula de días interactiva -->
            <div class="grid grid-cols-7 gap-1.5 text-center">
              @for (dia of comunalService.diasDelMes(); track dia.fecha) {
                <button
                  type="button"
                  (click)="seleccionarDia(dia.fecha)"
                  [disabled]="dia.estado === 'ocupado'"
                  [class.bg-slate-900]="dia.estado === 'disponible' && comunalService.fechaSeleccionada() !== dia.fecha"
                  [class.text-slate-200]="dia.estado === 'disponible' && comunalService.fechaSeleccionada() !== dia.fecha"
                  [class.border-slate-800]="dia.estado === 'disponible' && comunalService.fechaSeleccionada() !== dia.fecha"
                  [class.hover:border-emerald-500/50]="dia.estado === 'disponible' && comunalService.fechaSeleccionada() !== dia.fecha"
                  [class.bg-red-950/20]="dia.estado === 'ocupado'"
                  [class.text-red-500]="dia.estado === 'ocupado'"
                  [class.border-red-900/30]="dia.estado === 'ocupado'"
                  [class.cursor-not-allowed]="dia.estado === 'ocupado'"
                  [class.bg-amber-950/20]="dia.estado === 'revision' && comunalService.fechaSeleccionada() !== dia.fecha"
                  [class.text-amber-400]="dia.estado === 'revision' && comunalService.fechaSeleccionada() !== dia.fecha"
                  [class.border-amber-900/30]="dia.estado === 'revision' && comunalService.fechaSeleccionada() !== dia.fecha"
                  [class.bg-emerald-500]="comunalService.fechaSeleccionada() === dia.fecha"
                  [class.text-slate-950]="comunalService.fechaSeleccionada() === dia.fecha"
                  [class.font-extrabold]="comunalService.fechaSeleccionada() === dia.fecha"
                  [class.border-emerald-400]="comunalService.fechaSeleccionada() === dia.fecha"
                  [class.shadow-lg]="comunalService.fechaSeleccionada() === dia.fecha"
                  [class.shadow-emerald-500/30]="comunalService.fechaSeleccionada() === dia.fecha"
                  [class.ring-2]="comunalService.fechaSeleccionada() === dia.fecha"
                  [class.ring-emerald-400]="comunalService.fechaSeleccionada() === dia.fecha"
                  [class.scale-105]="comunalService.fechaSeleccionada() === dia.fecha"
                  class="h-11 rounded-xl border flex flex-col items-center justify-center text-sm font-semibold transition-all relative hover:scale-105"
                >
                  <span>{{ dia.diaNumero }}</span>
                  <span
                    class="w-1.5 h-1.5 rounded-full mt-0.5"
                    [class.bg-slate-950]="comunalService.fechaSeleccionada() === dia.fecha"
                    [class.bg-emerald-400]="dia.estado === 'disponible' && comunalService.fechaSeleccionada() !== dia.fecha"
                    [class.bg-red-500]="dia.estado === 'ocupado'"
                    [class.bg-amber-400]="dia.estado === 'revision' && comunalService.fechaSeleccionada() !== dia.fecha"
                  ></span>
                </button>
              }
            </div>

            <!-- Resumen de Fecha Seleccionada -->
            <div class="mt-6 p-4 bg-slate-950/80 border border-slate-800 rounded-2xl flex items-center justify-between">
              <div>
                <span class="text-[11px] font-bold text-emerald-400 uppercase tracking-wide block">
                  Fecha Seleccionada
                </span>
                <span class="text-base font-extrabold text-white">
                  {{ comunalService.fechaSeleccionada() }}
                </span>
              </div>
              <span class="text-xs bg-emerald-500 text-slate-950 font-black px-3 py-1 rounded-full shadow-xs">
                Disponible
              </span>
            </div>
          </div>

          <!-- Columna del Formulario de Reserva (lg:col-span-7) -->
          <div class="lg:col-span-7 card-clean-dark p-6 sm:p-8 bg-[#0b1120]/90 border border-slate-800">
            <div class="border-b border-slate-800 pb-4 mb-6">
              <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Paso a Paso Vecinal
              </span>
              <h3 class="text-2xl font-extrabold text-white mt-0.5">
                Solicitud de Reserva del Salón
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                Diligencia la información verídica como habitante de la comunidad para tramitar la reserva ante la Junta Directiva.
              </p>
            </div>

            <form (submit)="enviarSolicitud($event)" class="space-y-5">
              <!-- Fila 1: Nombre y Teléfono -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Nombre Completo del Vecino(a) *
                  </label>
                  <input
                    type="text"
                    [(ngModel)]="nombreVecino"
                    name="nombreVecino"
                    required
                    placeholder="Ej. María Clemencia Ospina"
                    class="input-dark-clean"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Teléfono Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    [(ngModel)]="telefono"
                    name="telefono"
                    required
                    placeholder="Ej. 312 456 7890"
                    class="input-dark-clean"
                  />
                </div>
              </div>

              <!-- Fila 2: Dirección y Correo Gmail -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Dirección dentro del Barrio *
                  </label>
                  <input
                    type="text"
                    [(ngModel)]="direccion"
                    name="direccion"
                    required
                    placeholder="Ej. Mz 6 Casa 14 / Torre 3 Apto 402"
                    class="input-dark-clean"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Correo Electrónico (Gmail) *
                  </label>
                  <input
                    type="email"
                    [(ngModel)]="email"
                    name="email"
                    required
                    placeholder="vecino@gmail.com"
                    class="input-dark-clean"
                  />
                </div>
              </div>

              <!-- Fila 3: Tipo de Evento y Horario -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Tipo de Evento *
                  </label>
                  <select [(ngModel)]="tipoEvento" name="tipoEvento" class="input-dark-clean">
                    <option value="familiar">Reunión / Cumpleaños Familiar</option>
                    <option value="comunitario">Evento Comunitario / Vecinal</option>
                    <option value="cultural">Taller Cultural o Formación</option>
                    <option value="asamblea">Asamblea de Copropietarios</option>
                    <option value="infantil">Fiesta Infantil</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Horario Deseado *
                  </label>
                  <select [(ngModel)]="horario" name="horario" class="input-dark-clean">
                    <option value="manana">Mañana: 8:00 AM - 1:00 PM</option>
                    <option value="tarde">Tarde: 2:00 PM - 6:00 PM</option>
                    <option value="noche">Noche: 7:00 PM - 11:00 PM</option>
                    <option value="completa">Jornada Completa (8:00 AM - 10:00 PM)</option>
                  </select>
                </div>
              </div>

              <!-- Fila 4: Asistentes y Observaciones -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Asistentes Estimados (Máx. 80)
                  </label>
                  <input
                    type="number"
                    [(ngModel)]="asistentesAprox"
                    name="asistentesAprox"
                    min="5"
                    max="100"
                    placeholder="35"
                    class="input-dark-clean"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Observaciones Especiales
                  </label>
                  <input
                    type="text"
                    [(ngModel)]="observaciones"
                    name="observaciones"
                    placeholder="Ej. Requerimos micrófono y sonido"
                    class="input-dark-clean"
                  />
                </div>
              </div>

              <!-- Normas Claras de Convivencia -->
              <div class="p-5 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-3">
                <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <span>📜 Normas de Convivencia y Compromiso Comunitario</span>
                </div>
                <ul class="text-xs text-slate-300 space-y-1.5 pl-4 list-disc">
                  <li><strong>Límite de decibeles:</strong> Prohibido exceder el volumen permitido por el Código Nacional de Policía.</li>
                  <li><strong>Hora límite de música:</strong> 11:00 PM en punto para respetar el sueño de los vecinos.</li>
                  <li><strong>Entrega aseado:</strong> El salón se devuelve barrido, trapeado y con bolsas de basura recogidas.</li>
                </ul>

                <div class="pt-2 border-t border-slate-800">
                  <label class="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      [(ngModel)]="normasAceptadas"
                      name="normasAceptadas"
                      required
                      class="mt-1 w-5 h-5 rounded text-emerald-500 focus:ring-emerald-400 bg-slate-900 border-slate-700"
                    />
                    <span class="text-xs font-bold text-slate-200 leading-snug">
                      He leído y me comprometo a cumplir rigurosamente las normas de convivencia del salón comunal y a entregarlo en perfecto estado.
                    </span>
                  </label>
                </div>
              </div>

              <!-- Mensaje de Error / Feedback -->
              @if (mensajeError()) {
                <div class="p-3.5 bg-red-950/60 border border-red-800/80 rounded-xl text-xs font-semibold text-red-300 animate-fade-in">
                  ⚠️ {{ mensajeError() }}
                </div>
              }

              <!-- Botón de Envío -->
              <div class="pt-2">
                <button
                  type="submit"
                  [disabled]="!normasAceptadas"
                  class="w-full btn-emerald-glow py-4 text-base font-black rounded-xl shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M22 2L11 13"></path>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span>Enviar Solicitud de Reserva & Disparar Aviso Gmail</span>
                </button>
                <p class="text-center text-xs text-slate-500 mt-2.5">
                  🔒 El sistema notificará de inmediato al correo del vecino y enviará la alerta a la Junta Directiva.
                </p>
              </div>
            </form>
          </div>
        </div>

        <!-- Ventana Modal Interactiva: Confirmación y Notificación Automática por Gmail -->
        @if (comunalService.modalGmailAbierto() && comunalService.ultimaNotificacionGmail()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
            <div class="bg-slate-900 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-800">
              
              <!-- Cabecera del Correo Estilo Workspace -->
              <div class="bg-gradient-to-r from-red-600 to-rose-700 text-white p-5 sm:p-6 flex items-center justify-between">
                <div class="flex items-center gap-3.5">
                  <div class="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold shadow-xs">
                    ✉️
                  </div>
                  <div>
                    <span class="text-[11px] uppercase tracking-wider text-rose-200 font-bold block">
                      Aviso Automático Disparado por Gmail
                    </span>
                    <h3 class="text-lg sm:text-xl font-bold leading-tight">
                      Confirmación de Reserva & Alerta a la JAC
                    </h3>
                  </div>
                </div>
                <button
                  (click)="comunalService.cerrarModalGmail()"
                  class="text-white/80 hover:text-white text-2xl font-bold p-1 leading-none transition-colors"
                  aria-label="Cerrar modal"
                >
                  ✕
                </button>
              </div>

              <!-- Cuerpo del Correo en Dark Mode Limpio -->
              <div class="p-6 sm:p-8 space-y-5 max-h-[78vh] overflow-y-auto text-slate-200">
                <div class="p-4 bg-emerald-950/60 border border-emerald-500/30 rounded-2xl flex items-start gap-3">
                  <span class="text-2xl">✅</span>
                  <div>
                    <h4 class="font-bold text-emerald-300 text-sm">
                      ¡Solicitud radicada y enviada a los 2 buzones oficiales!
                    </h4>
                    <p class="text-xs text-emerald-400/90 mt-0.5 leading-relaxed">
                      1. Confirmación enviada al vecino: <strong>{{ comunalService.ultimaNotificacionGmail()?.destinatario }}</strong><br />
                      2. Alerta prioritaria a la directiva: <strong>{{ config.emailAlertasDirectiva }}</strong>
                    </p>
                  </div>
                </div>

                <div class="border border-slate-800 rounded-2xl p-5 bg-slate-950/80 space-y-3">
                  <div class="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <div>
                      <strong>De:</strong> {{ config.nombreJAC }} &lt;{{ config.emailOficial }}&gt;
                    </div>
                    <div>{{ comunalService.ultimaNotificacionGmail()?.fechaHora }}</div>
                  </div>

                  <div class="text-xs text-slate-400">
                    <strong>Para:</strong> {{ comunalService.ultimaNotificacionGmail()?.destinatario }}
                  </div>

                  <div class="text-sm font-bold text-white">
                    Asunto: {{ comunalService.ultimaNotificacionGmail()?.asunto }}
                  </div>

                  <div class="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3 shadow-xs">
                    <p>
                      Estimado(a) vecino(a) <strong>{{ comunalService.ultimaNotificacionGmail()?.detalles?.nombre }}</strong>:
                    </p>
                    <p>
                      Hemos registrado satisfactoriamente tu solicitud para el alquiler del <strong>Salón Comunal de {{ config.barrio }}</strong>:
                    </p>

                    <div class="grid grid-cols-2 gap-3 p-3 bg-slate-950 rounded-xl text-xs font-medium text-slate-300 border border-slate-800">
                      <div>📅 <strong>Fecha:</strong> {{ comunalService.ultimaNotificacionGmail()?.detalles?.fecha }}</div>
                      <div>🕒 <strong>Horario:</strong> {{ comunalService.ultimaNotificacionGmail()?.detalles?.horario }}</div>
                      <div>🎉 <strong>Tipo de Evento:</strong> {{ comunalService.ultimaNotificacionGmail()?.detalles?.tipoEvento }}</div>
                      <div>📍 <strong>Dirección:</strong> {{ comunalService.ultimaNotificacionGmail()?.detalles?.direccion }}</div>
                    </div>

                    <p class="text-xs text-slate-400">
                      Un dignatario de la JAC se comunicará a tu celular (<strong>{{ comunalService.ultimaNotificacionGmail()?.detalles?.telefono }}</strong>) para coordinar la entrega y el depósito de garantía.
                    </p>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                  <a
                    [href]="generarEnlaceWhatsAppConfirmacion()"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full sm:w-auto btn-emerald-glow text-sm py-2.5 px-5 font-bold rounded-xl flex items-center justify-center gap-2"
                  >
                    <span>💬 Notificar por WhatsApp</span>
                  </a>
                  <button
                    (click)="comunalService.cerrarModalGmail()"
                    class="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-sm transition-colors"
                  >
                    Entendido y Cerrar
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
export class ReservaSalonComponent {
  readonly comunalService = inject(ComunalService);
  readonly config = COMUNAL_CONFIG;

  nombreVecino = '';
  direccion = '';
  telefono = '';
  email = '';
  tipoEvento: TipoEvento = 'familiar';
  horario: HorarioReserva = 'tarde';
  asistentesAprox = 35;
  observaciones = '';
  normasAceptadas = false;
  mensajeError = signal<string | null>(null);

  seleccionarDia(fecha: string): void {
    this.comunalService.seleccionarFecha(fecha);
    this.mensajeError.set(null);
  }

  enviarSolicitud(e: Event): void {
    e.preventDefault();
    this.mensajeError.set(null);

    if (!this.nombreVecino || !this.telefono || !this.direccion || !this.email) {
      this.mensajeError.set('Por favor completa todos los campos requeridos con asterisco (*).');
      return;
    }

    const resultado = this.comunalService.solicitarReserva({
      nombreVecino: this.nombreVecino,
      direccion: this.direccion,
      telefono: this.telefono,
      email: this.email,
      tipoEvento: this.tipoEvento,
      fecha: this.comunalService.fechaSeleccionada(),
      horario: this.horario,
      asistentesAprox: this.asistentesAprox,
      observaciones: this.observaciones,
      normasAceptadas: this.normasAceptadas
    });

    if (!resultado.exito) {
      this.mensajeError.set(resultado.mensaje);
    } else {
      this.observaciones = '';
    }
  }

  generarEnlaceWhatsAppConfirmacion(): string {
    const notif = this.comunalService.ultimaNotificacionGmail();
    const texto = `Hola Junta Directiva JAC ${this.config.barrio}, radiqué la solicitud de reserva para el salón comunal el día ${notif?.detalles.fecha} en horario ${notif?.detalles.horario}. Mi nombre es ${notif?.detalles.nombre}.`;
    return `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(texto)}`;
  }
}
