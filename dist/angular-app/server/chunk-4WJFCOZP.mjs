import './polyfills.server.mjs';
import {
  COMUNAL_CONFIG,
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  CommonModule,
  Component,
  ComunalService,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  UpperCasePipe,
  inject,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HH437KVM.mjs";
import "./chunk-LEH5XX4U.mjs";

// src/app/mfe-catalog/reserva-salon/reserva-salon.component.ts
var _forTrack0 = ($index, $item) => $item.fecha;
function ReservaSalonComponent_For_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function ReservaSalonComponent_For_79_Template_button_click_0_listener() {
      const dia_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.seleccionarDia(dia_r2.fecha));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dia_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-slate-900", dia_r2.estado === "disponible" && ctx_r2.comunalService.fechaSeleccionada() !== dia_r2.fecha)("text-slate-200", dia_r2.estado === "disponible" && ctx_r2.comunalService.fechaSeleccionada() !== dia_r2.fecha)("border-slate-800", dia_r2.estado === "disponible" && ctx_r2.comunalService.fechaSeleccionada() !== dia_r2.fecha)("hover:border-emerald-500/50", dia_r2.estado === "disponible" && ctx_r2.comunalService.fechaSeleccionada() !== dia_r2.fecha)("bg-red-950/20", dia_r2.estado === "ocupado")("text-red-500", dia_r2.estado === "ocupado")("border-red-900/30", dia_r2.estado === "ocupado")("cursor-not-allowed", dia_r2.estado === "ocupado")("bg-amber-950/20", dia_r2.estado === "revision" && ctx_r2.comunalService.fechaSeleccionada() !== dia_r2.fecha)("text-amber-400", dia_r2.estado === "revision" && ctx_r2.comunalService.fechaSeleccionada() !== dia_r2.fecha)("border-amber-900/30", dia_r2.estado === "revision" && ctx_r2.comunalService.fechaSeleccionada() !== dia_r2.fecha)("bg-emerald-500", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha)("text-slate-950", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha)("font-extrabold", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha)("border-emerald-400", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha)("shadow-lg", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha)("shadow-emerald-500/30", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha)("ring-2", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha)("ring-emerald-400", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha)("scale-105", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha);
    \u0275\u0275property("disabled", dia_r2.estado === "ocupado");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dia_r2.diaNumero);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-slate-950", ctx_r2.comunalService.fechaSeleccionada() === dia_r2.fecha)("bg-emerald-400", dia_r2.estado === "disponible" && ctx_r2.comunalService.fechaSeleccionada() !== dia_r2.fecha)("bg-red-500", dia_r2.estado === "ocupado")("bg-amber-400", dia_r2.estado === "revision" && ctx_r2.comunalService.fechaSeleccionada() !== dia_r2.fecha);
  }
}
function ReservaSalonComponent_Conditional_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r2.mensajeError(), " ");
  }
}
function ReservaSalonComponent_Conditional_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 76)(2, "div", 77)(3, "div", 78)(4, "div", 79);
    \u0275\u0275text(5, " \u2709\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "span", 80);
    \u0275\u0275text(8, " Aviso Autom\xE1tico Disparado por Gmail ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3", 81);
    \u0275\u0275text(10, " Confirmaci\xF3n de Reserva & Alerta a la JAC ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 82);
    \u0275\u0275listener("click", function ReservaSalonComponent_Conditional_183_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.comunalService.cerrarModalGmail());
    });
    \u0275\u0275text(12, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 83)(14, "div", 84)(15, "span", 85);
    \u0275\u0275text(16, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "h4", 86);
    \u0275\u0275text(19, " \xA1Solicitud radicada y enviada a los 2 buzones oficiales! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 87);
    \u0275\u0275text(21, " 1. Confirmaci\xF3n enviada al vecino: ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "br");
    \u0275\u0275text(25, " 2. Alerta prioritaria a la directiva: ");
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 88)(29, "div", 89)(30, "div")(31, "strong");
    \u0275\u0275text(32, "De:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 90)(37, "strong");
    \u0275\u0275text(38, "Para:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 91);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 92)(43, "p");
    \u0275\u0275text(44, " Estimado(a) vecino(a) ");
    \u0275\u0275elementStart(45, "strong");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p");
    \u0275\u0275text(49, " Hemos registrado satisfactoriamente tu solicitud para el alquiler del ");
    \u0275\u0275elementStart(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 93)(54, "div");
    \u0275\u0275text(55, "\u{1F4C5} ");
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div");
    \u0275\u0275text(60, "\u{1F552} ");
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62, "Horario:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div");
    \u0275\u0275text(65, "\u{1F389} ");
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67, "Tipo de Evento:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div");
    \u0275\u0275text(70, "\u{1F4CD} ");
    \u0275\u0275elementStart(71, "strong");
    \u0275\u0275text(72, "Direcci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "p", 90);
    \u0275\u0275text(75, " Un dignatario de la JAC se comunicar\xE1 a tu celular (");
    \u0275\u0275elementStart(76, "strong");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, ") para coordinar la entrega y el dep\xF3sito de garant\xEDa. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 94)(80, "a", 95)(81, "span");
    \u0275\u0275text(82, "\u{1F4AC} Notificar por WhatsApp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "button", 96);
    \u0275\u0275listener("click", function ReservaSalonComponent_Conditional_183_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.comunalService.cerrarModalGmail());
    });
    \u0275\u0275text(84, " Entendido y Cerrar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_1_0.destinatario);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.config.emailAlertasDirectiva);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r2.config.nombreJAC, " <", ctx_r2.config.emailOficial, "> ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_4_0.fechaHora);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_5_0.destinatario, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Asunto: ", (tmp_6_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_6_0.asunto, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_7_0.detalles == null ? null : tmp_7_0.detalles.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Sal\xF3n Comunal de ", ctx_r2.config.barrio);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (tmp_9_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_9_0.detalles == null ? null : tmp_9_0.detalles.fecha);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_10_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_10_0.detalles == null ? null : tmp_10_0.detalles.horario);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_11_0.detalles == null ? null : tmp_11_0.detalles.tipoEvento);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_12_0.detalles == null ? null : tmp_12_0.detalles.direccion);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_13_0 = ctx_r2.comunalService.ultimaNotificacionGmail()) == null ? null : tmp_13_0.detalles == null ? null : tmp_13_0.detalles.telefono);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r2.generarEnlaceWhatsAppConfirmacion(), \u0275\u0275sanitizeUrl);
  }
}
var ReservaSalonComponent = class _ReservaSalonComponent {
  comunalService = inject(ComunalService);
  config = COMUNAL_CONFIG;
  nombreVecino = "";
  direccion = "";
  telefono = "";
  email = "";
  tipoEvento = "familiar";
  horario = "tarde";
  asistentesAprox = 35;
  observaciones = "";
  normasAceptadas = false;
  mensajeError = signal(null, ...ngDevMode ? [{ debugName: "mensajeError" }] : (
    /* istanbul ignore next */
    []
  ));
  seleccionarDia(fecha) {
    this.comunalService.seleccionarFecha(fecha);
    this.mensajeError.set(null);
  }
  enviarSolicitud(e) {
    e.preventDefault();
    this.mensajeError.set(null);
    if (!this.nombreVecino || !this.telefono || !this.direccion || !this.email) {
      this.mensajeError.set("Por favor completa todos los campos requeridos con asterisco (*).");
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
      this.observaciones = "";
    }
  }
  generarEnlaceWhatsAppConfirmacion() {
    const notif = this.comunalService.ultimaNotificacionGmail();
    const texto = `Hola Junta Directiva JAC ${this.config.barrio}, radiqu\xE9 la solicitud de reserva para el sal\xF3n comunal el d\xEDa ${notif?.detalles.fecha} en horario ${notif?.detalles.horario}. Mi nombre es ${notif?.detalles.nombre}.`;
    return `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(texto)}`;
  }
  static \u0275fac = function ReservaSalonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservaSalonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservaSalonComponent, selectors: [["app-reserva-salon"]], decls: 184, vars: 14, consts: [["id", "salon-comunal", 1, "py-20", "bg-[#020617]", "border-t", "border-slate-900", "relative"], [1, "container-comunal"], [1, "max-w-3xl", "mx-auto", "text-center", "mb-14"], [1, "inline-flex", "items-center", "gap-2", "bg-emerald-500/10", "text-emerald-400", "text-xs", "font-bold", "px-3.5", "py-1", "rounded-full", "mb-3", "border", "border-emerald-500/20"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-emerald-400"], [1, "text-3xl", "sm:text-4xl", "font-extrabold", "text-white", "mb-3", "tracking-tight"], [1, "text-base", "sm:text-lg", "text-slate-400", "leading-relaxed"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "mb-12"], [1, "card-clean-dark", "p-6", "flex", "items-start", "gap-4"], [1, "w-12", "h-12", "rounded-2xl", "bg-emerald-950/80", "border", "border-emerald-500/30", "text-emerald-400", "flex", "items-center", "justify-center", "text-2xl", "flex-shrink-0", "shadow-xs"], [1, "font-bold", "text-white", "text-base", "mb-1"], [1, "text-xs", "sm:text-sm", "text-slate-400", "leading-relaxed"], [1, "w-12", "h-12", "rounded-2xl", "bg-slate-900", "border", "border-slate-800", "text-slate-300", "flex", "items-center", "justify-center", "text-2xl", "flex-shrink-0", "shadow-xs"], [1, "w-12", "h-12", "rounded-2xl", "bg-amber-950/60", "border", "border-amber-500/30", "text-amber-400", "flex", "items-center", "justify-center", "text-2xl", "flex-shrink-0", "shadow-xs"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-8", "items-start"], [1, "lg:col-span-5", "card-clean-dark", "p-6", "sm:p-7", "bg-[#0b1120]/90", "border", "border-slate-800"], [1, "flex", "items-center", "justify-between", "mb-5", "pb-4", "border-b", "border-slate-800"], [1, "text-[11px]", "font-bold", "text-emerald-400", "uppercase", "tracking-wider", "block"], [1, "text-xl", "font-extrabold", "text-white", "mt-0.5"], [1, "flex", "items-center", "gap-1.5"], ["type", "button", "aria-label", "Mes anterior", 1, "p-2.5", "rounded-xl", "border", "border-slate-800", "bg-slate-900", "hover:bg-slate-800", "text-slate-300", "transition-all", "hover:scale-105", 3, "click"], ["type", "button", "aria-label", "Mes siguiente", 1, "p-2.5", "rounded-xl", "border", "border-slate-800", "bg-slate-900", "hover:bg-slate-800", "text-slate-300", "transition-all", "hover:scale-105", 3, "click"], [1, "grid", "grid-cols-3", "gap-2", "p-2.5", "bg-slate-950/80", "rounded-xl", "text-xs", "font-semibold", "text-slate-400", "mb-5", "border", "border-slate-800/80"], [1, "flex", "items-center", "gap-2"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-emerald-400", "shadow-xs"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-red-500", "shadow-xs"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-amber-400", "shadow-xs"], [1, "grid", "grid-cols-7", "text-center", "font-bold", "text-slate-500", "text-xs", "py-1.5", "mb-1", "tracking-wider", "uppercase"], [1, "grid", "grid-cols-7", "gap-1.5", "text-center"], ["type", "button", 1, "h-11", "rounded-xl", "border", "flex", "flex-col", "items-center", "justify-center", "text-sm", "font-semibold", "transition-all", "relative", "hover:scale-105", 3, "disabled", "bg-slate-900", "text-slate-200", "border-slate-800", "hover:border-emerald-500/50", "bg-red-950/20", "text-red-500", "border-red-900/30", "cursor-not-allowed", "bg-amber-950/20", "text-amber-400", "border-amber-900/30", "bg-emerald-500", "text-slate-950", "font-extrabold", "border-emerald-400", "shadow-lg", "shadow-emerald-500/30", "ring-2", "ring-emerald-400", "scale-105"], [1, "mt-6", "p-4", "bg-slate-950/80", "border", "border-slate-800", "rounded-2xl", "flex", "items-center", "justify-between"], [1, "text-[11px]", "font-bold", "text-emerald-400", "uppercase", "tracking-wide", "block"], [1, "text-base", "font-extrabold", "text-white"], [1, "text-xs", "bg-emerald-500", "text-slate-950", "font-black", "px-3", "py-1", "rounded-full", "shadow-xs"], [1, "lg:col-span-7", "card-clean-dark", "p-6", "sm:p-8", "bg-[#0b1120]/90", "border", "border-slate-800"], [1, "border-b", "border-slate-800", "pb-4", "mb-6"], [1, "text-xs", "font-bold", "text-emerald-400", "uppercase", "tracking-wider", "block"], [1, "text-2xl", "font-extrabold", "text-white", "mt-0.5"], [1, "text-xs", "sm:text-sm", "text-slate-400", "mt-1"], [1, "space-y-5", 3, "submit"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-bold", "text-slate-300", "uppercase", "mb-1.5"], ["type", "text", "name", "nombreVecino", "required", "", "placeholder", "Ej. Mar\xEDa Clemencia Ospina", 1, "input-dark-clean", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "telefono", "required", "", "placeholder", "Ej. 312 456 7890", 1, "input-dark-clean", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "direccion", "required", "", "placeholder", "Ej. Mz 6 Casa 14 / Torre 3 Apto 402", 1, "input-dark-clean", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", "placeholder", "vecino@gmail.com", 1, "input-dark-clean", 3, "ngModelChange", "ngModel"], ["name", "tipoEvento", 1, "input-dark-clean", 3, "ngModelChange", "ngModel"], ["value", "familiar"], ["value", "comunitario"], ["value", "cultural"], ["value", "asamblea"], ["value", "infantil"], ["name", "horario", 1, "input-dark-clean", 3, "ngModelChange", "ngModel"], ["value", "manana"], ["value", "tarde"], ["value", "noche"], ["value", "completa"], ["type", "number", "name", "asistentesAprox", "min", "5", "max", "100", "placeholder", "35", 1, "input-dark-clean", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "observaciones", "placeholder", "Ej. Requerimos micr\xF3fono y sonido", 1, "input-dark-clean", 3, "ngModelChange", "ngModel"], [1, "p-5", "bg-slate-950/90", "border", "border-slate-800", "rounded-2xl", "space-y-3"], [1, "flex", "items-center", "gap-2", "text-emerald-400", "font-bold", "text-sm"], [1, "text-xs", "text-slate-300", "space-y-1.5", "pl-4", "list-disc"], [1, "pt-2", "border-t", "border-slate-800"], [1, "flex", "items-start", "gap-3", "cursor-pointer", "select-none"], ["type", "checkbox", "name", "normasAceptadas", "required", "", 1, "mt-1", "w-5", "h-5", "rounded", "text-emerald-500", "focus:ring-emerald-400", "bg-slate-900", "border-slate-700", 3, "ngModelChange", "ngModel"], [1, "text-xs", "font-bold", "text-slate-200", "leading-snug"], [1, "p-3.5", "bg-red-950/60", "border", "border-red-800/80", "rounded-xl", "text-xs", "font-semibold", "text-red-300", "animate-fade-in"], [1, "pt-2"], ["type", "submit", 1, "w-full", "btn-emerald-glow", "py-4", "text-base", "font-black", "rounded-xl", "shadow-xl", "flex", "items-center", "justify-center", "gap-3", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-5", "h-5"], ["d", "M22 2L11 13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "text-center", "text-xs", "text-slate-500", "mt-2.5"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4", "backdrop-blur-md", "animate-fade-in"], ["type", "button", 1, "h-11", "rounded-xl", "border", "flex", "flex-col", "items-center", "justify-center", "text-sm", "font-semibold", "transition-all", "relative", "hover:scale-105", 3, "click", "disabled"], [1, "w-1.5", "h-1.5", "rounded-full", "mt-0.5"], [1, "bg-slate-900", "rounded-3xl", "max-w-2xl", "w-full", "shadow-2xl", "overflow-hidden", "border", "border-slate-800"], [1, "bg-gradient-to-r", "from-red-600", "to-rose-700", "text-white", "p-5", "sm:p-6", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3.5"], [1, "w-11", "h-11", "rounded-2xl", "bg-white/20", "flex", "items-center", "justify-center", "text-2xl", "font-bold", "shadow-xs"], [1, "text-[11px]", "uppercase", "tracking-wider", "text-rose-200", "font-bold", "block"], [1, "text-lg", "sm:text-xl", "font-bold", "leading-tight"], ["aria-label", "Cerrar modal", 1, "text-white/80", "hover:text-white", "text-2xl", "font-bold", "p-1", "leading-none", "transition-colors", 3, "click"], [1, "p-6", "sm:p-8", "space-y-5", "max-h-[78vh]", "overflow-y-auto", "text-slate-200"], [1, "p-4", "bg-emerald-950/60", "border", "border-emerald-500/30", "rounded-2xl", "flex", "items-start", "gap-3"], [1, "text-2xl"], [1, "font-bold", "text-emerald-300", "text-sm"], [1, "text-xs", "text-emerald-400/90", "mt-0.5", "leading-relaxed"], [1, "border", "border-slate-800", "rounded-2xl", "p-5", "bg-slate-950/80", "space-y-3"], [1, "flex", "items-center", "justify-between", "text-xs", "text-slate-400", "pb-2", "border-b", "border-slate-800"], [1, "text-xs", "text-slate-400"], [1, "text-sm", "font-bold", "text-white"], [1, "p-4", "bg-slate-900", "rounded-xl", "border", "border-slate-800", "text-xs", "sm:text-sm", "text-slate-300", "space-y-3", "shadow-xs"], [1, "grid", "grid-cols-2", "gap-3", "p-3", "bg-slate-950", "rounded-xl", "text-xs", "font-medium", "text-slate-300", "border", "border-slate-800"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-end", "gap-3", "pt-2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "w-full", "sm:w-auto", "btn-emerald-glow", "text-sm", "py-2.5", "px-5", "font-bold", "rounded-xl", "flex", "items-center", "justify-center", "gap-2", 3, "href"], [1, "w-full", "sm:w-auto", "px-5", "py-2.5", "bg-slate-800", "hover:bg-slate-700", "text-slate-200", "font-semibold", "rounded-xl", "text-sm", "transition-colors", 3, "click"]], template: function ReservaSalonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "span", 4);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Espacio Comunitario para el Encuentro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h2", 5);
      \u0275\u0275text(8, " Alquiler y Reserva del Sal\xF3n Comunal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, " Un espacio dotado y seguro para tus celebraciones familiares, asambleas y talleres. Consulta la disponibilidad en vivo y agenda tu solicitud en minutos. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9);
      \u0275\u0275text(14, " \u{1F465} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div")(16, "h4", 10);
      \u0275\u0275text(17, "Capacidad & Dotaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 11);
      \u0275\u0275text(19, " Hasta 80 personas c\xF3modas. Incluye 80 sillas pl\xE1sticas, 10 mesas rectangulares, tarima comunal y sonido b\xE1sico. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 8)(21, "div", 12);
      \u0275\u0275text(22, " \u{1F373} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "h4", 10);
      \u0275\u0275text(25, "Cocineta & Servicios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 11);
      \u0275\u0275text(27, " \xC1rea de cocineta para calentar alimentos, nevera comunitaria y ba\xF1os independientes para damas y caballeros. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 8)(29, "div", 13);
      \u0275\u0275text(30, " \u{1F91D} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div")(32, "h4", 10);
      \u0275\u0275text(33, "Tarifa Vecinal Solidaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 11);
      \u0275\u0275text(35, " Tarifa preferencial para vecinos. Los aportes recaudados se reinvierten en aseo y mejoras continuas de la sede. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 14)(37, "div", 15)(38, "div", 16)(39, "div")(40, "span", 17);
      \u0275\u0275text(41, " Disponibilidad en Vivo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h3", 18);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 19)(45, "button", 20);
      \u0275\u0275listener("click", function ReservaSalonComponent_Template_button_click_45_listener() {
        return ctx.comunalService.mesAnterior();
      });
      \u0275\u0275text(46, " \u25C0 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 21);
      \u0275\u0275listener("click", function ReservaSalonComponent_Template_button_click_47_listener() {
        return ctx.comunalService.mesSiguiente();
      });
      \u0275\u0275text(48, " \u25B6 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 22)(50, "div", 23);
      \u0275\u0275element(51, "span", 24);
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "Libre");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 23);
      \u0275\u0275element(55, "span", 25);
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "Ocupado");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 23);
      \u0275\u0275element(59, "span", 26);
      \u0275\u0275elementStart(60, "span");
      \u0275\u0275text(61, "En tr\xE1mite");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 27)(63, "span");
      \u0275\u0275text(64, "Dom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "Lun");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Mar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Mi\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "Jue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span");
      \u0275\u0275text(74, "Vie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "S\xE1b");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 28);
      \u0275\u0275repeaterCreate(78, ReservaSalonComponent_For_79_Template, 4, 50, "button", 29, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 30)(81, "div")(82, "span", 31);
      \u0275\u0275text(83, " Fecha Seleccionada ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 32);
      \u0275\u0275text(85);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "span", 33);
      \u0275\u0275text(87, " Disponible ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 34)(89, "div", 35)(90, "span", 36);
      \u0275\u0275text(91, " Paso a Paso Vecinal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "h3", 37);
      \u0275\u0275text(93, " Solicitud de Reserva del Sal\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 38);
      \u0275\u0275text(95, " Diligencia la informaci\xF3n ver\xEDdica como habitante de la comunidad para tramitar la reserva ante la Junta Directiva. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "form", 39);
      \u0275\u0275listener("submit", function ReservaSalonComponent_Template_form_submit_96_listener($event) {
        return ctx.enviarSolicitud($event);
      });
      \u0275\u0275elementStart(97, "div", 40)(98, "div")(99, "label", 41);
      \u0275\u0275text(100, " Nombre Completo del Vecino(a) * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaSalonComponent_Template_input_ngModelChange_101_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.nombreVecino, $event) || (ctx.nombreVecino = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div")(103, "label", 41);
      \u0275\u0275text(104, " Tel\xE9fono Celular / WhatsApp * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaSalonComponent_Template_input_ngModelChange_105_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.telefono, $event) || (ctx.telefono = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 40)(107, "div")(108, "label", 41);
      \u0275\u0275text(109, " Direcci\xF3n dentro del Barrio * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaSalonComponent_Template_input_ngModelChange_110_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.direccion, $event) || (ctx.direccion = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div")(112, "label", 41);
      \u0275\u0275text(113, " Correo Electr\xF3nico (Gmail) * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaSalonComponent_Template_input_ngModelChange_114_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 40)(116, "div")(117, "label", 41);
      \u0275\u0275text(118, " Tipo de Evento * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "select", 46);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaSalonComponent_Template_select_ngModelChange_119_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tipoEvento, $event) || (ctx.tipoEvento = $event);
        return $event;
      });
      \u0275\u0275elementStart(120, "option", 47);
      \u0275\u0275text(121, "Reuni\xF3n / Cumplea\xF1os Familiar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "option", 48);
      \u0275\u0275text(123, "Evento Comunitario / Vecinal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "option", 49);
      \u0275\u0275text(125, "Taller Cultural o Formaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "option", 50);
      \u0275\u0275text(127, "Asamblea de Copropietarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "option", 51);
      \u0275\u0275text(129, "Fiesta Infantil");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div")(131, "label", 41);
      \u0275\u0275text(132, " Horario Deseado * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "select", 52);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaSalonComponent_Template_select_ngModelChange_133_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.horario, $event) || (ctx.horario = $event);
        return $event;
      });
      \u0275\u0275elementStart(134, "option", 53);
      \u0275\u0275text(135, "Ma\xF1ana: 8:00 AM - 1:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "option", 54);
      \u0275\u0275text(137, "Tarde: 2:00 PM - 6:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "option", 55);
      \u0275\u0275text(139, "Noche: 7:00 PM - 11:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "option", 56);
      \u0275\u0275text(141, "Jornada Completa (8:00 AM - 10:00 PM)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(142, "div", 40)(143, "div")(144, "label", 41);
      \u0275\u0275text(145, " Asistentes Estimados (M\xE1x. 80) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "input", 57);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaSalonComponent_Template_input_ngModelChange_146_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.asistentesAprox, $event) || (ctx.asistentesAprox = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div")(148, "label", 41);
      \u0275\u0275text(149, " Observaciones Especiales ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "input", 58);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaSalonComponent_Template_input_ngModelChange_150_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.observaciones, $event) || (ctx.observaciones = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "div", 59)(152, "div", 60)(153, "span");
      \u0275\u0275text(154, "\u{1F4DC} Normas de Convivencia y Compromiso Comunitario");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "ul", 61)(156, "li")(157, "strong");
      \u0275\u0275text(158, "L\xEDmite de decibeles:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(159, " Prohibido exceder el volumen permitido por el C\xF3digo Nacional de Polic\xEDa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "li")(161, "strong");
      \u0275\u0275text(162, "Hora l\xEDmite de m\xFAsica:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(163, " 11:00 PM en punto para respetar el sue\xF1o de los vecinos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "li")(165, "strong");
      \u0275\u0275text(166, "Entrega aseado:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(167, " El sal\xF3n se devuelve barrido, trapeado y con bolsas de basura recogidas.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 62)(169, "label", 63)(170, "input", 64);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaSalonComponent_Template_input_ngModelChange_170_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.normasAceptadas, $event) || (ctx.normasAceptadas = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "span", 65);
      \u0275\u0275text(172, " He le\xEDdo y me comprometo a cumplir rigurosamente las normas de convivencia del sal\xF3n comunal y a entregarlo en perfecto estado. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(173, ReservaSalonComponent_Conditional_173_Template, 2, 1, "div", 66);
      \u0275\u0275elementStart(174, "div", 67)(175, "button", 68);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(176, "svg", 69);
      \u0275\u0275element(177, "path", 70)(178, "polygon", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(179, "span");
      \u0275\u0275text(180, "Enviar Solicitud de Reserva & Disparar Aviso Gmail");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "p", 72);
      \u0275\u0275text(182, " \u{1F512} El sistema notificar\xE1 de inmediato al correo del vecino y enviar\xE1 la alerta a la Junta Directiva. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(183, ReservaSalonComponent_Conditional_183_Template, 85, 15, "div", 73);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(43);
      \u0275\u0275textInterpolate1(" ", ctx.comunalService.nombreMesActual(), " ");
      \u0275\u0275advance(35);
      \u0275\u0275repeater(ctx.comunalService.diasDelMes());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.comunalService.fechaSeleccionada(), " ");
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.nombreVecino);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.telefono);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.direccion);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.tipoEvento);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.horario);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.asistentesAprox);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.observaciones);
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.normasAceptadas);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.mensajeError() ? 173 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.normasAceptadas);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.comunalService.modalGmailAbierto() && ctx.comunalService.ultimaNotificacionGmail() ? 183 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, CheckboxRequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservaSalonComponent, [{
    type: Component,
    args: [{
      selector: "app-reserva-salon",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <section id="salon-comunal" class="py-20 bg-[#020617] border-t border-slate-900 relative">
      <div class="container-comunal">
        
        <!-- Encabezado de la Secci\xF3n -->
        <div class="max-w-3xl mx-auto text-center mb-14">
          <div class="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Espacio Comunitario para el Encuentro</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Alquiler y Reserva del Sal\xF3n Comunal
          </h2>
          <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
            Un espacio dotado y seguro para tus celebraciones familiares, asambleas y talleres. Consulta la disponibilidad en vivo y agenda tu solicitud en minutos.
          </p>
        </div>

        <!-- Tarjetas Informativas de Dotaci\xF3n en Tonos Oscuros Limpios -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="card-clean-dark p-6 flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-2xl flex-shrink-0 shadow-xs">
              \u{1F465}
            </div>
            <div>
              <h4 class="font-bold text-white text-base mb-1">Capacidad & Dotaci\xF3n</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Hasta 80 personas c\xF3modas. Incluye 80 sillas pl\xE1sticas, 10 mesas rectangulares, tarima comunal y sonido b\xE1sico.
              </p>
            </div>
          </div>

          <div class="card-clean-dark p-6 flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center text-2xl flex-shrink-0 shadow-xs">
              \u{1F373}
            </div>
            <div>
              <h4 class="font-bold text-white text-base mb-1">Cocineta & Servicios</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                \xC1rea de cocineta para calentar alimentos, nevera comunitaria y ba\xF1os independientes para damas y caballeros.
              </p>
            </div>
          </div>

          <div class="card-clean-dark p-6 flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-500/30 text-amber-400 flex items-center justify-center text-2xl flex-shrink-0 shadow-xs">
              \u{1F91D}
            </div>
            <div>
              <h4 class="font-bold text-white text-base mb-1">Tarifa Vecinal Solidaria</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Tarifa preferencial para vecinos. Los aportes recaudados se reinvierten en aseo y mejoras continuas de la sede.
              </p>
            </div>
          </div>
        </div>

        <!-- Cuadr\xEDcula Principal: Calendario en Vivo + Formulario Accesible -->
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
                  \u25C0
                </button>
                <button
                  type="button"
                  (click)="comunalService.mesSiguiente()"
                  class="p-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 transition-all hover:scale-105"
                  aria-label="Mes siguiente"
                >
                  \u25B6
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
                <span>En tr\xE1mite</span>
              </div>
            </div>

            <!-- D\xEDas de la semana -->
            <div class="grid grid-cols-7 text-center font-bold text-slate-500 text-xs py-1.5 mb-1 tracking-wider uppercase">
              <span>Dom</span>
              <span>Lun</span>
              <span>Mar</span>
              <span>Mi\xE9</span>
              <span>Jue</span>
              <span>Vie</span>
              <span>S\xE1b</span>
            </div>

            <!-- Cuadr\xEDcula de d\xEDas interactiva -->
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
                Solicitud de Reserva del Sal\xF3n
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                Diligencia la informaci\xF3n ver\xEDdica como habitante de la comunidad para tramitar la reserva ante la Junta Directiva.
              </p>
            </div>

            <form (submit)="enviarSolicitud($event)" class="space-y-5">
              <!-- Fila 1: Nombre y Tel\xE9fono -->
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
                    placeholder="Ej. Mar\xEDa Clemencia Ospina"
                    class="input-dark-clean"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Tel\xE9fono Celular / WhatsApp *
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

              <!-- Fila 2: Direcci\xF3n y Correo Gmail -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Direcci\xF3n dentro del Barrio *
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
                    Correo Electr\xF3nico (Gmail) *
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
                    <option value="familiar">Reuni\xF3n / Cumplea\xF1os Familiar</option>
                    <option value="comunitario">Evento Comunitario / Vecinal</option>
                    <option value="cultural">Taller Cultural o Formaci\xF3n</option>
                    <option value="asamblea">Asamblea de Copropietarios</option>
                    <option value="infantil">Fiesta Infantil</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                    Horario Deseado *
                  </label>
                  <select [(ngModel)]="horario" name="horario" class="input-dark-clean">
                    <option value="manana">Ma\xF1ana: 8:00 AM - 1:00 PM</option>
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
                    Asistentes Estimados (M\xE1x. 80)
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
                    placeholder="Ej. Requerimos micr\xF3fono y sonido"
                    class="input-dark-clean"
                  />
                </div>
              </div>

              <!-- Normas Claras de Convivencia -->
              <div class="p-5 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-3">
                <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <span>\u{1F4DC} Normas de Convivencia y Compromiso Comunitario</span>
                </div>
                <ul class="text-xs text-slate-300 space-y-1.5 pl-4 list-disc">
                  <li><strong>L\xEDmite de decibeles:</strong> Prohibido exceder el volumen permitido por el C\xF3digo Nacional de Polic\xEDa.</li>
                  <li><strong>Hora l\xEDmite de m\xFAsica:</strong> 11:00 PM en punto para respetar el sue\xF1o de los vecinos.</li>
                  <li><strong>Entrega aseado:</strong> El sal\xF3n se devuelve barrido, trapeado y con bolsas de basura recogidas.</li>
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
                      He le\xEDdo y me comprometo a cumplir rigurosamente las normas de convivencia del sal\xF3n comunal y a entregarlo en perfecto estado.
                    </span>
                  </label>
                </div>
              </div>

              <!-- Mensaje de Error / Feedback -->
              @if (mensajeError()) {
                <div class="p-3.5 bg-red-950/60 border border-red-800/80 rounded-xl text-xs font-semibold text-red-300 animate-fade-in">
                  \u26A0\uFE0F {{ mensajeError() }}
                </div>
              }

              <!-- Bot\xF3n de Env\xEDo -->
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
                  \u{1F512} El sistema notificar\xE1 de inmediato al correo del vecino y enviar\xE1 la alerta a la Junta Directiva.
                </p>
              </div>
            </form>
          </div>
        </div>

        <!-- Ventana Modal Interactiva: Confirmaci\xF3n y Notificaci\xF3n Autom\xE1tica por Gmail -->
        @if (comunalService.modalGmailAbierto() && comunalService.ultimaNotificacionGmail()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
            <div class="bg-slate-900 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-800">
              
              <!-- Cabecera del Correo Estilo Workspace -->
              <div class="bg-gradient-to-r from-red-600 to-rose-700 text-white p-5 sm:p-6 flex items-center justify-between">
                <div class="flex items-center gap-3.5">
                  <div class="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold shadow-xs">
                    \u2709\uFE0F
                  </div>
                  <div>
                    <span class="text-[11px] uppercase tracking-wider text-rose-200 font-bold block">
                      Aviso Autom\xE1tico Disparado por Gmail
                    </span>
                    <h3 class="text-lg sm:text-xl font-bold leading-tight">
                      Confirmaci\xF3n de Reserva & Alerta a la JAC
                    </h3>
                  </div>
                </div>
                <button
                  (click)="comunalService.cerrarModalGmail()"
                  class="text-white/80 hover:text-white text-2xl font-bold p-1 leading-none transition-colors"
                  aria-label="Cerrar modal"
                >
                  \u2715
                </button>
              </div>

              <!-- Cuerpo del Correo en Dark Mode Limpio -->
              <div class="p-6 sm:p-8 space-y-5 max-h-[78vh] overflow-y-auto text-slate-200">
                <div class="p-4 bg-emerald-950/60 border border-emerald-500/30 rounded-2xl flex items-start gap-3">
                  <span class="text-2xl">\u2705</span>
                  <div>
                    <h4 class="font-bold text-emerald-300 text-sm">
                      \xA1Solicitud radicada y enviada a los 2 buzones oficiales!
                    </h4>
                    <p class="text-xs text-emerald-400/90 mt-0.5 leading-relaxed">
                      1. Confirmaci\xF3n enviada al vecino: <strong>{{ comunalService.ultimaNotificacionGmail()?.destinatario }}</strong><br />
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
                      Hemos registrado satisfactoriamente tu solicitud para el alquiler del <strong>Sal\xF3n Comunal de {{ config.barrio }}</strong>:
                    </p>

                    <div class="grid grid-cols-2 gap-3 p-3 bg-slate-950 rounded-xl text-xs font-medium text-slate-300 border border-slate-800">
                      <div>\u{1F4C5} <strong>Fecha:</strong> {{ comunalService.ultimaNotificacionGmail()?.detalles?.fecha }}</div>
                      <div>\u{1F552} <strong>Horario:</strong> {{ comunalService.ultimaNotificacionGmail()?.detalles?.horario }}</div>
                      <div>\u{1F389} <strong>Tipo de Evento:</strong> {{ comunalService.ultimaNotificacionGmail()?.detalles?.tipoEvento }}</div>
                      <div>\u{1F4CD} <strong>Direcci\xF3n:</strong> {{ comunalService.ultimaNotificacionGmail()?.detalles?.direccion }}</div>
                    </div>

                    <p class="text-xs text-slate-400">
                      Un dignatario de la JAC se comunicar\xE1 a tu celular (<strong>{{ comunalService.ultimaNotificacionGmail()?.detalles?.telefono }}</strong>) para coordinar la entrega y el dep\xF3sito de garant\xEDa.
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
                    <span>\u{1F4AC} Notificar por WhatsApp</span>
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
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservaSalonComponent, { className: "ReservaSalonComponent", filePath: "src/app/mfe-catalog/reserva-salon/reserva-salon.component.ts", lineNumber: 481 });
})();

// src/app/mfe-catalog/transparencia/transparencia.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function TransparenciaComponent_For_13_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F6E3}\uFE0F ");
  }
}
function TransparenciaComponent_For_13_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F333} ");
  }
}
function TransparenciaComponent_For_13_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F465} ");
  }
}
function TransparenciaComponent_For_13_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4C8} ");
  }
}
function TransparenciaComponent_For_13_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F3C6} ");
  }
}
function TransparenciaComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div")(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 21);
    \u0275\u0275conditionalCreate(6, TransparenciaComponent_For_13_Case_6_Template, 1, 0)(7, TransparenciaComponent_For_13_Case_7_Template, 1, 0)(8, TransparenciaComponent_For_13_Case_8_Template, 1, 0)(9, TransparenciaComponent_For_13_Case_9_Template, 1, 0)(10, TransparenciaComponent_For_13_Case_10_Template, 1, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 22)(12, "span", 23);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "h4", 25);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "p", 26);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 27)(21, "div", 28)(22, "span");
    \u0275\u0275text(23, "Cumplimiento del Plan");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "span", 29);
    \u0275\u0275text(25);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(26, "div", 30);
    \u0275\u0275domElement(27, "div", 31);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const logro_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", logro_r1.categoria, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = logro_r1.icono) === "road" ? 6 : tmp_11_0 === "tree" ? 7 : tmp_11_0 === "users" ? 8 : tmp_11_0 === "chart" ? 9 : 10);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", logro_r1.cifra, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", logro_r1.unidad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", logro_r1.titulo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", logro_r1.descripcion, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", logro_r1.progreso, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", logro_r1.progreso, "%");
  }
}
function TransparenciaComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 17)(1, "div", 32)(2, "div", 33)(3, "span", 34);
    \u0275\u0275text(4, "PDF");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div")(8, "div", 36)(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span", 38);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 39);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "h4", 40);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "p", 41);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "span", 42);
    \u0275\u0275text(20, " \u270D\uFE0F ");
    \u0275\u0275domElementStart(21, "strong");
    \u0275\u0275text(22, "Firmado por:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(24, "div", 43)(25, "button", 44);
    \u0275\u0275domListener("click", function TransparenciaComponent_For_34_Template_button_click_25_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.abrirVisor(doc_r3));
    });
    \u0275\u0275domElementStart(26, "span");
    \u0275\u0275text(27, "\u{1F441}\uFE0F Ver Resumen");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(28, "button", 45);
    \u0275\u0275domListener("click", function TransparenciaComponent_For_34_Template_button_click_28_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.descargar(doc_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(29, "svg", 46);
    \u0275\u0275domElement(30, "path", 47)(31, "polyline", 48)(32, "line", 49);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(33, "span");
    \u0275\u0275text(34, "Descargar PDF");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "span", 50);
    \u0275\u0275text(36);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(doc_r3.tamano);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-emerald-950", doc_r3.categoria === "acta")("text-emerald-400", doc_r3.categoria === "acta")("border-emerald-800", doc_r3.categoria === "acta")("bg-blue-950", doc_r3.categoria === "balance")("text-blue-400", doc_r3.categoria === "balance")("border-blue-800", doc_r3.categoria === "balance")("bg-amber-950", doc_r3.categoria === "informe")("text-amber-400", doc_r3.categoria === "informe")("border-amber-800", doc_r3.categoria === "informe");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r3.categoria, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2022 ", doc_r3.periodo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", doc_r3.fecha, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", doc_r3.titulo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", doc_r3.descripcion, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", doc_r3.firmadoPor, " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", doc_r3.descargas, " ");
  }
}
function TransparenciaComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18)(1, "div", 51)(2, "div", 52)(3, "div")(4, "span", 53);
    \u0275\u0275text(5, " Documento P\xFAblico Comunitario ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "h3", 54);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "button", 55);
    \u0275\u0275domListener("click", function TransparenciaComponent_Conditional_35_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarVisor());
    });
    \u0275\u0275text(9, " \u2715 ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 56)(11, "div", 57)(12, "div")(13, "strong");
    \u0275\u0275text(14, "Periodo:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div")(17, "strong");
    \u0275\u0275text(18, "Fecha Oficial:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "div")(21, "strong");
    \u0275\u0275text(22, "Categor\xEDa:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "uppercase");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "div")(26, "strong");
    \u0275\u0275text(27, "Tama\xF1o:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(28);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(29, "div")(30, "h5", 58);
    \u0275\u0275text(31, "Resumen de la Rendici\xF3n de Cuentas:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(32, "p", 59);
    \u0275\u0275text(33);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 60)(35, "span");
    \u0275\u0275text(36, "\u{1F512} Certificado por:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "strong", 61);
    \u0275\u0275text(38);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(39, "div", 62)(40, "button", 63);
    \u0275\u0275domListener("click", function TransparenciaComponent_Conditional_35_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarVisor());
    });
    \u0275\u0275text(41, " Cerrar ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "button", 64);
    \u0275\u0275domListener("click", function TransparenciaComponent_Conditional_35_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.descargar(ctx_r3.documentoSeleccionado()));
    });
    \u0275\u0275domElementStart(43, "span");
    \u0275\u0275text(44, "Descargar Documento Oficial");
    \u0275\u0275domElementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx_r3.documentoSeleccionado()) == null ? null : tmp_1_0.titulo, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r3.documentoSeleccionado()) == null ? null : tmp_2_0.periodo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r3.documentoSeleccionado()) == null ? null : tmp_3_0.fecha);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 7, (tmp_4_0 = ctx_r3.documentoSeleccionado()) == null ? null : tmp_4_0.categoria));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r3.documentoSeleccionado()) == null ? null : tmp_5_0.tamano);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_6_0 = ctx_r3.documentoSeleccionado()) == null ? null : tmp_6_0.descripcion, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r3.documentoSeleccionado()) == null ? null : tmp_7_0.firmadoPor);
  }
}
var TransparenciaComponent = class _TransparenciaComponent {
  comunalService = inject(ComunalService);
  config = COMUNAL_CONFIG;
  documentoSeleccionado = signal(null, ...ngDevMode ? [{ debugName: "documentoSeleccionado" }] : (
    /* istanbul ignore next */
    []
  ));
  cambiarFiltro(filtro) {
    this.comunalService.filtroDocumento.set(filtro);
  }
  descargar(doc) {
    this.comunalService.descargarDocumento(doc);
  }
  abrirVisor(doc) {
    this.documentoSeleccionado.set(doc);
  }
  cerrarVisor() {
    this.documentoSeleccionado.set(null);
  }
  static \u0275fac = function TransparenciaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransparenciaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransparenciaComponent, selectors: [["app-transparencia"]], decls: 36, vars: 26, consts: [["id", "transparencia", 1, "py-24", "bg-[#050b18]", "border-t", "border-slate-900"], [1, "container-comunal"], [1, "max-w-3xl", "mx-auto", "text-center", "mb-14"], [1, "inline-flex", "items-center", "gap-2", "bg-emerald-500/10", "text-emerald-400", "text-xs", "font-bold", "px-3.5", "py-1", "rounded-full", "mb-3", "border", "border-emerald-500/20"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-emerald-400"], [1, "text-3xl", "sm:text-4xl", "font-extrabold", "text-white", "mb-3", "tracking-tight"], [1, "text-base", "sm:text-lg", "text-slate-400", "leading-relaxed"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-6", "mb-16"], [1, "card-clean-dark", "p-6", "flex", "flex-col", "justify-between", "group"], [1, "card-clean-dark", "p-6", "sm:p-9", "bg-[#0b1120]/90", "border", "border-slate-800"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4", "mb-8", "pb-6", "border-b", "border-slate-800"], [1, "text-[11px]", "font-bold", "text-emerald-400", "uppercase", "tracking-wider", "block"], [1, "text-2xl", "font-extrabold", "text-white", "mt-0.5"], [1, "text-xs", "sm:text-sm", "text-slate-400", "mt-1"], [1, "flex", "flex-wrap", "items-center", "gap-2", "bg-slate-950", "p-1.5", "rounded-2xl", "border", "border-slate-800"], [1, "px-3.5", "py-1.5", "rounded-xl", "text-xs", "font-bold", "transition-all", 3, "click"], [1, "space-y-4"], [1, "p-5", "rounded-2xl", "bg-slate-950/70", "border", "border-slate-800", "hover:border-emerald-500/50", "transition-all", "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-5"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4", "backdrop-blur-md", "animate-fade-in"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-[11px]", "font-extrabold", "text-emerald-400", "bg-emerald-950/60", "px-2.5", "py-1", "rounded-full", "border", "border-emerald-500/30", "uppercase", "tracking-wide"], [1, "w-11", "h-11", "rounded-2xl", "bg-slate-900", "group-hover:bg-emerald-950/60", "text-slate-300", "group-hover:text-emerald-400", "border", "border-slate-800", "flex", "items-center", "justify-center", "font-bold", "text-xl", "transition-colors", "shadow-xs"], [1, "mt-1", "mb-2"], [1, "text-3xl", "sm:text-4xl", "font-black", "text-white", "tracking-tight"], [1, "text-xs", "text-slate-400", "font-bold", "block", "mt-0.5", "uppercase", "tracking-wide"], [1, "text-base", "font-bold", "text-white", "mt-2", "mb-1.5", "leading-snug"], [1, "text-xs", "text-slate-400", "leading-relaxed"], [1, "mt-5", "pt-3", "border-t", "border-slate-800"], [1, "flex", "justify-between", "text-xs", "font-semibold", "text-slate-300", "mb-1.5"], [1, "text-emerald-400", "font-extrabold"], [1, "w-full", "bg-slate-900", "rounded-full", "h-2", "overflow-hidden", "border", "border-slate-800"], [1, "bg-gradient-to-r", "from-emerald-500", "to-teal-400", "h-full", "rounded-full", "transition-all", "duration-700", "shadow-xs"], [1, "flex", "items-start", "gap-4"], [1, "w-13", "h-13", "rounded-2xl", "bg-red-950/40", "border", "border-red-800/40", "text-red-400", "flex", "flex-col", "items-center", "justify-center", "font-black", "flex-shrink-0", "shadow-xs", "p-2"], [1, "text-xs", "leading-none"], [1, "text-[10px]", "text-red-300", "font-semibold", "mt-0.5"], [1, "flex", "flex-wrap", "items-center", "gap-2", "mb-1.5"], [1, "text-[10px]", "font-black", "uppercase", "px-2.5", "py-0.5", "rounded-full", "border"], [1, "text-xs", "text-slate-400", "font-medium"], [1, "text-xs", "text-slate-500"], [1, "text-base", "font-bold", "text-white", "leading-snug"], [1, "text-xs", "text-slate-400", "mt-1", "max-w-2xl", "leading-relaxed"], [1, "text-[11px]", "text-slate-500", "mt-1.5", "block", "font-medium"], [1, "flex", "items-center", "gap-2.5", "w-full", "sm:w-auto", "justify-end", "flex-shrink-0", "pt-2", "sm:pt-0"], ["title", "Ver resumen oficial", 1, "btn-dark-secondary", "text-xs", "sm:text-sm", "py-2", "px-3.5", 3, "click"], ["title", "Descargar documento PDF", 1, "btn-emerald-glow", "text-xs", "sm:text-sm", "py-2", "px-4", "shadow-sm", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-4", "h-4"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "text-[10px]", "bg-slate-950", "text-emerald-400", "px-1.5", "py-0.5", "rounded-full", "ml-1", "font-bold"], [1, "bg-slate-900", "rounded-3xl", "max-w-xl", "w-full", "shadow-2xl", "overflow-hidden", "border", "border-slate-800"], [1, "bg-[#020617]", "text-white", "p-6", "flex", "items-center", "justify-between", "border-b", "border-slate-800"], [1, "text-[11px]", "uppercase", "text-emerald-400", "font-bold", "tracking-wider", "block"], [1, "text-lg", "font-bold", "tracking-tight", "mt-0.5"], [1, "text-slate-400", "hover:text-white", "text-2xl", "font-bold", "p-1", "leading-none", "transition-colors", 3, "click"], [1, "p-6", "space-y-4"], [1, "grid", "grid-cols-2", "gap-3", "text-xs", "bg-slate-950", "p-3.5", "rounded-2xl", "border", "border-slate-800", "text-slate-300"], [1, "text-xs", "font-bold", "text-slate-300", "uppercase", "mb-1.5"], [1, "text-xs", "sm:text-sm", "text-slate-300", "leading-relaxed", "bg-slate-950/80", "p-4", "rounded-2xl", "border", "border-slate-800"], [1, "text-xs", "text-slate-400", "flex", "items-center", "gap-1.5"], [1, "text-slate-200"], [1, "flex", "items-center", "justify-end", "gap-3", "pt-3", "border-t", "border-slate-800"], [1, "px-4", "py-2", "bg-slate-800", "hover:bg-slate-700", "text-slate-300", "font-semibold", "text-xs", "sm:text-sm", "rounded-xl", 3, "click"], [1, "btn-emerald-glow", "text-xs", "sm:text-sm", "py-2", "px-4", "shadow-sm", 3, "click"]], template: function TransparenciaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275domElement(4, "span", 4);
      \u0275\u0275domElementStart(5, "span");
      \u0275\u0275text(6, "Gobierno Abierto & Cuentas Claras");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "h2", 5);
      \u0275\u0275text(8, " Transparencia y Resultados a la Comunidad ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "p", 6);
      \u0275\u0275text(10, " Cada peso recaudado y cada obra realizada le pertenece a los vecinos. Consulta nuestras metas alcanzadas y descarga las actas oficiales de asamblea y balances de tesorer\xEDa en PDF. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7);
      \u0275\u0275repeaterCreate(12, TransparenciaComponent_For_13_Template, 28, 9, "div", 8, _forTrack02);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "div", 9)(15, "div", 10)(16, "div")(17, "span", 11);
      \u0275\u0275text(18, " Archivo Digital P\xFAblico ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "h3", 12);
      \u0275\u0275text(20, " Actas de Asamblea, Balances e Informes de Gesti\xF3n ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "p", 13);
      \u0275\u0275text(22, " Consulta libre para cualquier habitante del sector sin contrase\xF1as ni intermediarios. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(23, "div", 14)(24, "button", 15);
      \u0275\u0275domListener("click", function TransparenciaComponent_Template_button_click_24_listener() {
        return ctx.cambiarFiltro("todos");
      });
      \u0275\u0275text(25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "button", 15);
      \u0275\u0275domListener("click", function TransparenciaComponent_Template_button_click_26_listener() {
        return ctx.cambiarFiltro("acta");
      });
      \u0275\u0275text(27, " \u{1F4DC} Actas ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "button", 15);
      \u0275\u0275domListener("click", function TransparenciaComponent_Template_button_click_28_listener() {
        return ctx.cambiarFiltro("balance");
      });
      \u0275\u0275text(29, " \u{1F4B0} Balances ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "button", 15);
      \u0275\u0275domListener("click", function TransparenciaComponent_Template_button_click_30_listener() {
        return ctx.cambiarFiltro("informe");
      });
      \u0275\u0275text(31, " \u{1F4D1} Informes ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(32, "div", 16);
      \u0275\u0275repeaterCreate(33, TransparenciaComponent_For_34_Template, 37, 26, "div", 17, _forTrack02);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(35, TransparenciaComponent_Conditional_35_Template, 45, 9, "div", 18);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.comunalService.logros());
      \u0275\u0275advance(12);
      \u0275\u0275classProp("bg-emerald-500", ctx.comunalService.filtroDocumento() === "todos")("text-slate-950", ctx.comunalService.filtroDocumento() === "todos")("text-slate-300", ctx.comunalService.filtroDocumento() !== "todos");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Todos (", ctx.comunalService.documentos().length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-emerald-500", ctx.comunalService.filtroDocumento() === "acta")("text-slate-950", ctx.comunalService.filtroDocumento() === "acta")("text-slate-300", ctx.comunalService.filtroDocumento() !== "acta");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-emerald-500", ctx.comunalService.filtroDocumento() === "balance")("text-slate-950", ctx.comunalService.filtroDocumento() === "balance")("text-slate-300", ctx.comunalService.filtroDocumento() !== "balance");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-emerald-500", ctx.comunalService.filtroDocumento() === "informe")("text-slate-950", ctx.comunalService.filtroDocumento() === "informe")("text-slate-300", ctx.comunalService.filtroDocumento() !== "informe");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.comunalService.documentosFiltrados());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.documentoSeleccionado() ? 35 : -1);
    }
  }, dependencies: [CommonModule, UpperCasePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransparenciaComponent, [{
    type: Component,
    args: [{
      selector: "app-transparencia",
      standalone: true,
      imports: [CommonModule],
      template: `
    <section id="transparencia" class="py-24 bg-[#050b18] border-t border-slate-900">
      <div class="container-comunal">
        
        <!-- Encabezado de la Secci\xF3n -->
        <div class="max-w-3xl mx-auto text-center mb-14">
          <div class="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Gobierno Abierto & Cuentas Claras</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Transparencia y Resultados a la Comunidad
          </h2>
          <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
            Cada peso recaudado y cada obra realizada le pertenece a los vecinos. Consulta nuestras metas alcanzadas y descarga las actas oficiales de asamblea y balances de tesorer\xEDa en PDF.
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
                      @case ('road') { \u{1F6E3}\uFE0F }
                      @case ('tree') { \u{1F333} }
                      @case ('users') { \u{1F465} }
                      @case ('chart') { \u{1F4C8} }
                      @default { \u{1F3C6} }
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

        <!-- M\xF3dulo de Descargas de Documentos Oficiales en PDF (Clean Dark) -->
        <div class="card-clean-dark p-6 sm:p-9 bg-[#0b1120]/90 border border-slate-800">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <span class="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                Archivo Digital P\xFAblico
              </span>
              <h3 class="text-2xl font-extrabold text-white mt-0.5">
                Actas de Asamblea, Balances e Informes de Gesti\xF3n
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                Consulta libre para cualquier habitante del sector sin contrase\xF1as ni intermediarios.
              </p>
            </div>

            <!-- Filtros P\xEDldora en Dark Surface -->
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
                \u{1F4DC} Actas
              </button>
              <button
                (click)="cambiarFiltro('balance')"
                [class.bg-emerald-500]="comunalService.filtroDocumento() === 'balance'"
                [class.text-slate-950]="comunalService.filtroDocumento() === 'balance'"
                [class.text-slate-300]="comunalService.filtroDocumento() !== 'balance'"
                class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all"
              >
                \u{1F4B0} Balances
              </button>
              <button
                (click)="cambiarFiltro('informe')"
                [class.bg-emerald-500]="comunalService.filtroDocumento() === 'informe'"
                [class.text-slate-950]="comunalService.filtroDocumento() === 'informe'"
                [class.text-slate-300]="comunalService.filtroDocumento() !== 'informe'"
                class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all"
              >
                \u{1F4D1} Informes
              </button>
            </div>
          </div>

          <!-- Lista de Documentos Estilo Clean Dark -->
          <div class="space-y-4">
            @for (doc of comunalService.documentosFiltrados(); track doc.id) {
              <div class="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div class="flex items-start gap-4">
                  <div class="w-13 h-13 rounded-2xl bg-red-950/40 border border-red-800/40 text-red-400 flex flex-col items-center justify-center font-black flex-shrink-0 shadow-xs p-2">
                    <span class="text-xs leading-none">PDF</span>
                    <span class="text-[10px] text-red-300 font-semibold mt-0.5">{{ doc.tamano }}</span>
                  </div>
                  <div>
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
                      <span class="text-xs text-slate-400 font-medium">\u2022 {{ doc.periodo }}</span>
                      <span class="text-xs text-slate-500">({{ doc.fecha }})</span>
                    </div>
                    <h4 class="text-base font-bold text-white leading-snug">
                      {{ doc.titulo }}
                    </h4>
                    <p class="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                      {{ doc.descripcion }}
                    </p>
                    <span class="text-[11px] text-slate-500 mt-1.5 block font-medium">
                      \u270D\uFE0F <strong>Firmado por:</strong> {{ doc.firmadoPor }}
                    </span>
                  </div>
                </div>

                <!-- Botones de Acci\xF3n -->
                <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end flex-shrink-0 pt-2 sm:pt-0">
                  <button
                    (click)="abrirVisor(doc)"
                    class="btn-dark-secondary text-xs sm:text-sm py-2 px-3.5"
                    title="Ver resumen oficial"
                  >
                    <span>\u{1F441}\uFE0F Ver Resumen</span>
                  </button>

                  <button
                    (click)="descargar(doc)"
                    class="btn-emerald-glow text-xs sm:text-sm py-2 px-4 shadow-sm"
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

        <!-- Modal de Consulta R\xE1pida de Documento (Dark Clean) -->
        @if (documentoSeleccionado()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
            <div class="bg-slate-900 rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-800">
              <div class="bg-[#020617] text-white p-6 flex items-center justify-between border-b border-slate-800">
                <div>
                  <span class="text-[11px] uppercase text-emerald-400 font-bold tracking-wider block">
                    Documento P\xFAblico Comunitario
                  </span>
                  <h3 class="text-lg font-bold tracking-tight mt-0.5">
                    {{ documentoSeleccionado()?.titulo }}
                  </h3>
                </div>
                <button
                  (click)="cerrarVisor()"
                  class="text-slate-400 hover:text-white text-2xl font-bold p-1 leading-none transition-colors"
                >
                  \u2715
                </button>
              </div>

              <div class="p-6 space-y-4">
                <div class="grid grid-cols-2 gap-3 text-xs bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-slate-300">
                  <div><strong>Periodo:</strong> {{ documentoSeleccionado()?.periodo }}</div>
                  <div><strong>Fecha Oficial:</strong> {{ documentoSeleccionado()?.fecha }}</div>
                  <div><strong>Categor\xEDa:</strong> {{ documentoSeleccionado()?.categoria | uppercase }}</div>
                  <div><strong>Tama\xF1o:</strong> {{ documentoSeleccionado()?.tamano }}</div>
                </div>

                <div>
                  <h5 class="text-xs font-bold text-slate-300 uppercase mb-1.5">Resumen de la Rendici\xF3n de Cuentas:</h5>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                    {{ documentoSeleccionado()?.descripcion }}
                  </p>
                </div>

                <div class="text-xs text-slate-400 flex items-center gap-1.5">
                  <span>\u{1F512} Certificado por:</span>
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
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransparenciaComponent, { className: "TransparenciaComponent", filePath: "src/app/mfe-catalog/transparencia/transparencia.component.ts", lineNumber: 273 });
})();

// src/app/mfe-catalog/voz-barrio/voz-barrio.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function VozBarrioComponent_For_26_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, " \u23F3 En revisi\xF3n previa ");
    \u0275\u0275elementEnd();
  }
}
function VozBarrioComponent_For_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 46);
    \u0275\u0275elementStart(2, "div", 47)(3, "span", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, VozBarrioComponent_For_26_Conditional_1_Conditional_5_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pub_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", pub_r1.imagenUrl, \u0275\u0275sanitizeUrl)("alt", pub_r1.titulo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", pub_r1.etiqueta, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(pub_r1.estado === "revision" ? 5 : -1);
  }
}
function VozBarrioComponent_For_26_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pub_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CD} ", pub_r1.direccionVecino, " ");
  }
}
function VozBarrioComponent_For_26_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 50);
    \u0275\u0275text(2, "Contacto Vecinal:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 51)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pub_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "https://wa.me/57" + pub_r1.contacto.replace(" ", ""), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4AC} WhatsApp: ", pub_r1.contacto);
  }
}
function VozBarrioComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 12);
    \u0275\u0275conditionalCreate(1, VozBarrioComponent_For_26_Conditional_1_Template, 6, 4, "div", 35);
    \u0275\u0275elementStart(2, "div", 36)(3, "div", 37)(4, "div", 38)(5, "div", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "span", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, VozBarrioComponent_For_26_Conditional_12_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3", 43);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 44);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, VozBarrioComponent_For_26_Conditional_17_Template, 6, 2, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pub_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(pub_r1.imagenUrl ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", pub_r1.autor.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pub_r1.autor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pub_r1.fecha);
    \u0275\u0275advance();
    \u0275\u0275conditional(pub_r1.direccionVecino ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pub_r1.titulo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pub_r1.contenido, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(pub_r1.contacto ? 17 : -1);
  }
}
function VozBarrioComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.mensajeExito(), " ");
  }
}
var VozBarrioComponent = class _VozBarrioComponent {
  comunalService = inject(ComunalService);
  config = COMUNAL_CONFIG;
  filtroTipo = signal("todos", ...ngDevMode ? [{ debugName: "filtroTipo" }] : (
    /* istanbul ignore next */
    []
  ));
  // Formulario
  tipoAporte = "emprendimiento";
  titulo = "";
  autor = "";
  direccionVecino = "";
  contenido = "";
  imagenUrl = "";
  contacto = "";
  mensajeExito = signal(null, ...ngDevMode ? [{ debugName: "mensajeExito" }] : (
    /* istanbul ignore next */
    []
  ));
  publicacionesFiltradas() {
    const filtro = this.filtroTipo();
    const pubs = this.comunalService.publicacionesVoz();
    if (filtro === "todos")
      return pubs;
    return pubs.filter((p) => p.tipo === filtro);
  }
  enviarPublicacion(e) {
    e.preventDefault();
    if (!this.titulo || !this.autor || !this.contenido)
      return;
    this.comunalService.subirAporteVecinal({
      tipo: this.tipoAporte,
      titulo: this.titulo,
      autor: this.autor,
      direccionVecino: this.direccionVecino,
      contenido: this.contenido,
      imagenUrl: this.imagenUrl || "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=700&auto=format&fit=crop&q=80",
      contacto: this.contacto
    });
    this.mensajeExito.set('\xA1Tu aporte ha sido recibido! Ya est\xE1 visible en tu pantalla con estado "En revisi\xF3n previa" y ha sido radicado para la junta.');
    this.titulo = "";
    this.contenido = "";
    this.contacto = "";
    setTimeout(() => this.mensajeExito.set(null), 8e3);
  }
  static \u0275fac = function VozBarrioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VozBarrioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VozBarrioComponent, selectors: [["app-voz-barrio"]], decls: 87, vars: 38, consts: [["id", "voz-barrio", 1, "py-20", "bg-[#020617]", "border-t", "border-slate-900"], [1, "container-comunal"], [1, "max-w-3xl", "mx-auto", "text-center", "mb-14"], [1, "inline-flex", "items-center", "gap-2", "bg-emerald-500/10", "text-emerald-400", "text-xs", "font-bold", "px-3.5", "py-1", "rounded-full", "mb-3", "border", "border-emerald-500/20"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-emerald-400"], [1, "text-3xl", "sm:text-4xl", "font-extrabold", "text-white", "mb-3", "tracking-tight"], [1, "text-base", "sm:text-lg", "text-slate-400", "leading-relaxed"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-8", "items-start"], [1, "lg:col-span-7", "space-y-6"], [1, "flex", "items-center", "gap-2", "overflow-x-auto", "pb-2", "scrollbar-none", "bg-slate-950", "p-1.5", "rounded-2xl", "border", "border-slate-800"], [1, "px-4", "py-2", "rounded-xl", "text-xs", "font-bold", "transition-all", "flex-shrink-0", 3, "click"], [1, "space-y-6"], [1, "card-clean-dark", "bg-[#0b1120]/90", "overflow-hidden", "border", "border-slate-800", "transition-all"], [1, "lg:col-span-5", "card-clean-dark", "p-6", "sm:p-8", "bg-[#0b1120]/90", "border", "border-slate-800", "sticky", "top-24", "shadow-xl"], [1, "border-b", "border-slate-800", "pb-4", "mb-6"], [1, "text-xs", "font-bold", "text-emerald-400", "uppercase", "tracking-wider", "block"], [1, "text-2xl", "font-extrabold", "text-white", "mt-0.5"], [1, "text-xs", "text-slate-400", "mt-1"], [1, "space-y-4", 3, "submit"], [1, "block", "text-xs", "font-bold", "text-slate-300", "uppercase", "mb-1"], ["name", "tipoAporte", 1, "input-dark-clean", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "emprendimiento"], ["value", "cronica"], ["value", "alerta"], ["value", "noticia"], ["type", "text", "name", "titulo", "required", "", "placeholder", "Ej. Taller de costura comunitaria en la casa 18", 1, "input-dark-clean", "text-sm", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3"], ["type", "text", "name", "autor", "required", "", "placeholder", "Nombre y Apellido", 1, "input-dark-clean", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "direccionVecino", "placeholder", "Ej. Mz 4 Casa 8", 1, "input-dark-clean", "text-sm", 3, "ngModelChange", "ngModel"], ["name", "contenido", "rows", "3", "required", "", "placeholder", "Cu\xE9ntanos con claridad los detalles para que todos los vecinos puedan comprender tu mensaje...", 1, "input-dark-clean", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "imagenUrl", "placeholder", "https://images.unsplash...", 1, "input-dark-clean", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "contacto", "placeholder", "310 123 4567", 1, "input-dark-clean", "text-sm", 3, "ngModelChange", "ngModel"], [1, "p-3", "bg-emerald-950/40", "border", "border-emerald-500/20", "rounded-xl", "text-xs", "text-emerald-300", "flex", "items-start", "gap-2"], [1, "p-3", "bg-emerald-950/80", "border", "border-emerald-500/40", "rounded-xl", "text-xs", "font-bold", "text-emerald-300", "animate-fade-in"], ["type", "submit", 1, "w-full", "btn-emerald-glow", "text-sm", "font-black", "py-3.5", "rounded-xl", "shadow-md", "flex", "items-center", "justify-center", "gap-2"], [1, "w-full", "h-52", "sm:h-64", "overflow-hidden", "bg-slate-950", "relative"], [1, "p-6", "sm:p-7"], [1, "flex", "items-center", "justify-between", "gap-3", "mb-3"], [1, "flex", "items-center", "gap-2.5"], [1, "w-8", "h-8", "rounded-full", "bg-emerald-500", "text-slate-950", "flex", "items-center", "justify-center", "font-black", "text-xs", "shadow-xs"], [1, "text-xs", "font-bold", "text-slate-200", "block", "leading-tight"], [1, "text-[11px]", "text-slate-500", "font-medium"], [1, "text-[11px]", "text-slate-400", "bg-slate-900", "border", "border-slate-800", "px-2.5", "py-0.5", "rounded-full", "font-medium", "hidden", "sm:inline-block"], [1, "text-xl", "font-bold", "text-white", "mb-2", "leading-snug", "tracking-tight"], [1, "text-xs", "sm:text-sm", "text-slate-400", "leading-relaxed"], [1, "mt-4", "pt-3.5", "border-t", "border-slate-800/80", "flex", "items-center", "justify-between"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", "hover:scale-105", "transition-transform", "duration-700", 3, "src", "alt"], [1, "absolute", "top-3.5", "left-3.5", "flex", "items-center", "gap-2"], [1, "bg-[#020617]/90", "text-emerald-400", "border", "border-emerald-500/30", "text-[11px]", "font-extrabold", "px-3", "py-1", "rounded-full", "shadow-md", "backdrop-blur-md"], [1, "bg-amber-500", "text-slate-950", "text-[10px]", "font-black", "px-2.5", "py-0.5", "rounded-full", "shadow-xs"], [1, "text-xs", "font-semibold", "text-slate-400"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn-dark-secondary", "text-xs", "py-1.5", "px-3", "flex", "items-center", "gap-1.5", "text-emerald-400", "border-emerald-500/30", "hover:bg-emerald-500/10", 3, "href"]], template: function VozBarrioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "span", 4);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Participaci\xF3n Ciudadana Activa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h2", 5);
      \u0275\u0275text(8, " La Voz del Barrio & Clasificados Vecinales ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, " Un espacio libre para apoyar los emprendimientos de la cuadra, revivir la memoria de nuestros fundadores y reportar alertas comunitarias con moderaci\xF3n de la Junta. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function VozBarrioComponent_Template_button_click_14_listener() {
        return ctx.filtroTipo.set("todos");
      });
      \u0275\u0275text(15, " Todas las Notas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function VozBarrioComponent_Template_button_click_16_listener() {
        return ctx.filtroTipo.set("noticia");
      });
      \u0275\u0275text(17, " \u{1F4E2} Noticias JAC ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 10);
      \u0275\u0275listener("click", function VozBarrioComponent_Template_button_click_18_listener() {
        return ctx.filtroTipo.set("emprendimiento");
      });
      \u0275\u0275text(19, " \u{1F6CD}\uFE0F Emprendimientos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 10);
      \u0275\u0275listener("click", function VozBarrioComponent_Template_button_click_20_listener() {
        return ctx.filtroTipo.set("cronica");
      });
      \u0275\u0275text(21, " \u{1F4D6} Cr\xF3nicas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 10);
      \u0275\u0275listener("click", function VozBarrioComponent_Template_button_click_22_listener() {
        return ctx.filtroTipo.set("alerta");
      });
      \u0275\u0275text(23, " \u{1F514} Alertas ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 11);
      \u0275\u0275repeaterCreate(25, VozBarrioComponent_For_26_Template, 18, 8, "article", 12, _forTrack03);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 13)(28, "div", 14)(29, "span", 15);
      \u0275\u0275text(30, " Tu voz construye comunidad ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "h3", 16);
      \u0275\u0275text(32, " Participa y Publica ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 17);
      \u0275\u0275text(34, " Comparte una historia, un reconocimiento o tu emprendimiento para publicarlo tras revisi\xF3n de la junta. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "form", 18);
      \u0275\u0275listener("submit", function VozBarrioComponent_Template_form_submit_35_listener($event) {
        return ctx.enviarPublicacion($event);
      });
      \u0275\u0275elementStart(36, "div")(37, "label", 19);
      \u0275\u0275text(38, " \xBFQu\xE9 deseas compartir? * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function VozBarrioComponent_Template_select_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tipoAporte, $event) || (ctx.tipoAporte = $event);
        return $event;
      });
      \u0275\u0275elementStart(40, "option", 21);
      \u0275\u0275text(41, "\u{1F6CD}\uFE0F Emprendimiento o Clasificado del Barrio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 22);
      \u0275\u0275text(43, "\u{1F4D6} Historia, An\xE9cdota o Reconocimiento Vecinal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 23);
      \u0275\u0275text(45, "\u{1F514} Alerta Comunitaria o Sugerencia de Convivencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 24);
      \u0275\u0275text(47, "\u{1F4E2} Noticia o Convocatoria de Cuadra");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div")(49, "label", 19);
      \u0275\u0275text(50, " T\xEDtulo de tu Publicaci\xF3n * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function VozBarrioComponent_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.titulo, $event) || (ctx.titulo = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 26)(53, "div")(54, "label", 19);
      \u0275\u0275text(55, " Tu Nombre * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function VozBarrioComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.autor, $event) || (ctx.autor = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div")(58, "label", 19);
      \u0275\u0275text(59, " Direcci\xF3n en el Barrio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function VozBarrioComponent_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.direccionVecino, $event) || (ctx.direccionVecino = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div")(62, "label", 19);
      \u0275\u0275text(63, " Descripci\xF3n o Historia * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "textarea", 29);
      \u0275\u0275twoWayListener("ngModelChange", function VozBarrioComponent_Template_textarea_ngModelChange_64_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.contenido, $event) || (ctx.contenido = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 26)(66, "div")(67, "label", 19);
      \u0275\u0275text(68, " Enlace de Foto (URL) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function VozBarrioComponent_Template_input_ngModelChange_69_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.imagenUrl, $event) || (ctx.imagenUrl = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div")(71, "label", 19);
      \u0275\u0275text(72, " Tel\xE9fono / WhatsApp ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function VozBarrioComponent_Template_input_ngModelChange_73_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.contacto, $event) || (ctx.contacto = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 32)(75, "span");
      \u0275\u0275text(76, "\u{1F6E1}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span")(78, "strong");
      \u0275\u0275text(79, "Moderaci\xF3n Comunitaria:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " La junta revisar\xE1 previamente que el contenido respete la convivencia vecinal. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(81, VozBarrioComponent_Conditional_81_Template, 2, 1, "div", 33);
      \u0275\u0275elementStart(82, "button", 34)(83, "span");
      \u0275\u0275text(84, "Enviar para Aprobaci\xF3n de la Junta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "\u{1F4E4}");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275classProp("bg-emerald-500", ctx.filtroTipo() === "todos")("text-slate-950", ctx.filtroTipo() === "todos")("text-slate-300", ctx.filtroTipo() !== "todos");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-emerald-500", ctx.filtroTipo() === "noticia")("text-slate-950", ctx.filtroTipo() === "noticia")("text-slate-300", ctx.filtroTipo() !== "noticia");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-emerald-500", ctx.filtroTipo() === "emprendimiento")("text-slate-950", ctx.filtroTipo() === "emprendimiento")("text-slate-300", ctx.filtroTipo() !== "emprendimiento");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-emerald-500", ctx.filtroTipo() === "cronica")("text-slate-950", ctx.filtroTipo() === "cronica")("text-slate-300", ctx.filtroTipo() !== "cronica");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-emerald-500", ctx.filtroTipo() === "alerta")("text-slate-950", ctx.filtroTipo() === "alerta")("text-slate-300", ctx.filtroTipo() !== "alerta");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.publicacionesFiltradas());
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.tipoAporte);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.titulo);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.autor);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.direccionVecino);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contenido);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.imagenUrl);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contacto);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.mensajeExito() ? 81 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VozBarrioComponent, [{
    type: Component,
    args: [{
      selector: "app-voz-barrio",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <section id="voz-barrio" class="py-20 bg-[#020617] border-t border-slate-900">
      <div class="container-comunal">
        
        <!-- Encabezado de la Secci\xF3n -->
        <div class="max-w-3xl mx-auto text-center mb-14">
          <div class="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Participaci\xF3n Ciudadana Activa</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            La Voz del Barrio & Clasificados Vecinales
          </h2>
          <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
            Un espacio libre para apoyar los emprendimientos de la cuadra, revivir la memoria de nuestros fundadores y reportar alertas comunitarias con moderaci\xF3n de la Junta.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Columna Izquierda: Muro de Publicaciones (lg:col-span-7) -->
          <div class="lg:col-span-7 space-y-6">
            <!-- Pesta\xF1as Filtro Estilo Dark Minimalist -->
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
                \u{1F4E2} Noticias JAC
              </button>
              <button
                (click)="filtroTipo.set('emprendimiento')"
                [class.bg-emerald-500]="filtroTipo() === 'emprendimiento'"
                [class.text-slate-950]="filtroTipo() === 'emprendimiento'"
                [class.text-slate-300]="filtroTipo() !== 'emprendimiento'"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
              >
                \u{1F6CD}\uFE0F Emprendimientos
              </button>
              <button
                (click)="filtroTipo.set('cronica')"
                [class.bg-emerald-500]="filtroTipo() === 'cronica'"
                [class.text-slate-950]="filtroTipo() === 'cronica'"
                [class.text-slate-300]="filtroTipo() !== 'cronica'"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
              >
                \u{1F4D6} Cr\xF3nicas
              </button>
              <button
                (click)="filtroTipo.set('alerta')"
                [class.bg-emerald-500]="filtroTipo() === 'alerta'"
                [class.text-slate-950]="filtroTipo() === 'alerta'"
                [class.text-slate-300]="filtroTipo() !== 'alerta'"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
              >
                \u{1F514} Alertas
              </button>
            </div>

            <!-- Lista de Art\xEDculos del Muro en Clean Dark -->
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
                            \u23F3 En revisi\xF3n previa
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
                          \u{1F4CD} {{ pub.direccionVecino }}
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
                          <span>\u{1F4AC} WhatsApp: {{ pub.contacto }}</span>
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
                Comparte una historia, un reconocimiento o tu emprendimiento para publicarlo tras revisi\xF3n de la junta.
              </p>
            </div>

            <form (submit)="enviarPublicacion($event)" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-300 uppercase mb-1">
                  \xBFQu\xE9 deseas compartir? *
                </label>
                <select [(ngModel)]="tipoAporte" name="tipoAporte" class="input-dark-clean text-sm">
                  <option value="emprendimiento">\u{1F6CD}\uFE0F Emprendimiento o Clasificado del Barrio</option>
                  <option value="cronica">\u{1F4D6} Historia, An\xE9cdota o Reconocimiento Vecinal</option>
                  <option value="alerta">\u{1F514} Alerta Comunitaria o Sugerencia de Convivencia</option>
                  <option value="noticia">\u{1F4E2} Noticia o Convocatoria de Cuadra</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 uppercase mb-1">
                  T\xEDtulo de tu Publicaci\xF3n *
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
                    Direcci\xF3n en el Barrio
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
                  Descripci\xF3n o Historia *
                </label>
                <textarea
                  [(ngModel)]="contenido"
                  name="contenido"
                  rows="3"
                  required
                  placeholder="Cu\xE9ntanos con claridad los detalles para que todos los vecinos puedan comprender tu mensaje..."
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
                    Tel\xE9fono / WhatsApp
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
                <span>\u{1F6E1}\uFE0F</span>
                <span>
                  <strong>Moderaci\xF3n Comunitaria:</strong> La junta revisar\xE1 previamente que el contenido respete la convivencia vecinal.
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
                <span>Enviar para Aprobaci\xF3n de la Junta</span>
                <span>\u{1F4E4}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VozBarrioComponent, { className: "VozBarrioComponent", filePath: "src/app/mfe-catalog/voz-barrio/voz-barrio.component.ts", lineNumber: 292 });
})();

// src/app/mfe-catalog/catalog-view.component.ts
var CatalogViewComponent = class _CatalogViewComponent {
  config = COMUNAL_CONFIG;
  get whatsappOficialUrl() {
    const msg = encodeURIComponent(this.config.whatsappMensajePredeterminado);
    return `https://wa.me/${this.config.whatsappNumber}?text=${msg}`;
  }
  static \u0275fac = function CatalogViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogViewComponent, selectors: [["app-catalog-view"]], decls: 112, vars: 6, consts: [[1, "comunal-portal", "text-slate-100"], ["id", "inicio", 1, "relative", "py-20", "lg:py-28", "overflow-hidden", "border-b", "border-slate-900", "bg-[#020617]"], [1, "absolute", "top-0", "left-1/3", "w-[600px]", "h-[600px]", "bg-emerald-500/10", "rounded-full", "blur-[140px]", "pointer-events-none"], [1, "container-comunal", "relative", "z-10"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-12", "lg:gap-16", "items-center"], [1, "lg:col-span-7", "space-y-7", "text-center", "lg:text-left"], [1, "inline-flex", "items-center", "gap-2", "bg-emerald-500/10", "border", "border-emerald-500/30", "text-emerald-400", "text-xs", "sm:text-sm", "font-semibold", "px-4", "py-1.5", "rounded-full"], [1, "w-2", "h-2", "rounded-full", "bg-emerald-400", "animate-pulse"], [1, "text-4xl", "sm:text-5xl", "lg:text-6xl", "font-black", "tracking-tight", "text-white", "leading-tight"], [1, "text-gradient-emerald"], [1, "text-base", "sm:text-xl", "text-slate-300", "max-w-2xl", "mx-auto", "lg:mx-0", "font-normal", "leading-relaxed"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-center", "lg:justify-start", "gap-4", "pt-2"], ["href", "#salon-comunal", 1, "w-full", "sm:w-auto", "btn-emerald-glow", "text-base", "py-4", "px-8", "rounded-xl", "font-bold", "flex", "items-center", "justify-center", "gap-3", "shadow-xl"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-5", "h-5"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["target", "_blank", "rel", "noopener noreferrer", 1, "w-full", "sm:w-auto", "btn-dark-secondary", "text-base", "py-4", "px-7", "rounded-xl", "flex", "items-center", "justify-center", "gap-2.5", 3, "href"], [1, "text-xl"], [1, "pt-8", "border-t", "border-slate-800/80", "flex", "flex-wrap", "items-center", "justify-center", "lg:justify-start", "gap-8", "sm:gap-12"], [1, "flex", "items-center", "gap-3.5"], [1, "w-11", "h-11", "rounded-xl", "bg-emerald-500/10", "border", "border-emerald-500/30", "flex", "items-center", "justify-center", "text-emerald-400", "font-bold", "text-lg"], [1, "text-left"], [1, "text-2xl", "sm:text-3xl", "font-black", "text-white", "leading-none"], [1, "text-xs", "text-slate-400", "font-medium", "mt-1"], [1, "w-px", "h-10", "bg-slate-800", "hidden", "sm:block"], [1, "lg:col-span-5"], [1, "relative", "rounded-3xl", "overflow-hidden", "shadow-2xl", "border", "border-emerald-500/25", "group", "bg-slate-900"], ["src", "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&auto=format&fit=crop&q=80", "alt", "Instalaciones del Sal\xF3n Comunal y Parque de Los Rosales", 1, "w-full", "h-80", "sm:h-96", "object-cover", "group-hover:scale-105", "transition-transform", "duration-700"], [1, "absolute", "top-4", "left-4", "z-10"], [1, "inline-flex", "items-center", "gap-2", "bg-[#020617]/90", "backdrop-blur-md", "text-emerald-400", "border", "border-emerald-500/40", "text-xs", "font-bold", "px-3", "py-1.5", "rounded-full", "shadow-lg"], [1, "absolute", "inset-x-0", "bottom-0", "bg-gradient-to-t", "from-[#020617]", "via-[#020617]/85", "to-transparent", "p-6", "sm:p-7", "text-white"], [1, "text-xl", "sm:text-2xl", "font-bold", "tracking-tight", "mb-2"], [1, "text-xs", "sm:text-sm", "text-slate-300", "leading-relaxed", "mb-3"], [1, "flex", "flex-wrap", "gap-2", "pt-1"], [1, "bg-slate-950/80", "border", "border-slate-800", "text-[11px]", "font-semibold", "text-slate-300", "px-2.5", "py-1", "rounded-lg"], [1, "bg-[#050b18]", "border-b", "border-slate-800", "text-slate-200", "text-sm", "py-4", "px-4", "shadow-sm"], [1, "container-comunal", "flex", "flex-wrap", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3"], [1, "badge-amber-pill"], [1, "font-bold", "text-white"], [1, "text-slate-300", "hidden", "md:inline"], ["href", "#transparencia", 1, "inline-flex", "items-center", "gap-1.5", "font-bold", "text-emerald-400", "hover:text-emerald-300", "transition-colors", "ml-auto", "text-sm"], ["id", "contacto", 1, "py-20", "border-t", "border-slate-900", "bg-[#020617]"], [1, "container-comunal"], [1, "card-clean-dark", "p-8", "sm:p-12", "border", "border-slate-800", "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-8", "relative", "overflow-hidden"], [1, "space-y-3", "text-center", "md:text-left", "relative", "z-10"], [1, "badge-emerald-pill"], [1, "text-2xl", "sm:text-3xl", "font-extrabold", "text-white", "tracking-tight"], [1, "text-sm", "sm:text-base", "text-slate-300", "max-w-xl", "leading-relaxed"], [1, "flex", "flex-wrap", "items-center", "justify-center", "gap-4", "relative", "z-10", "flex-shrink-0"], ["href", "tel:123", 1, "bg-red-600", "hover:bg-red-700", "text-white", "font-bold", "py-3.5", "px-6", "rounded-xl", "text-sm", "shadow-md", "transition-all", "hover:scale-105", "inline-flex", "items-center", "gap-2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn-emerald-glow", "text-sm", "py-3.5", "px-6", "font-bold", "shadow-md", 3, "href"]], template: function CatalogViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "span", 7);
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "h1", 8);
      \u0275\u0275text(11);
      \u0275\u0275element(12, "br");
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p", 10);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "a", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 13);
      \u0275\u0275element(20, "rect", 14)(21, "line", 15)(22, "line", 16)(23, "line", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Reservar Sal\xF3n Comunal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "a", 18)(27, "span", 19);
      \u0275\u0275text(28, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "WhatsApp Oficial JAC");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 21)(33, "div", 22);
      \u0275\u0275text(34, " \u2713 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 23)(36, "div", 24);
      \u0275\u0275text(37, "100%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 25);
      \u0275\u0275text(39, "Cuentas Claras en PDF");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(40, "div", 26);
      \u0275\u0275elementStart(41, "div", 21)(42, "div", 22);
      \u0275\u0275text(43, " \u{1F465} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 23)(45, "div", 24);
      \u0275\u0275text(46, "80+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 25);
      \u0275\u0275text(48, "Capacidad en Sal\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(49, "div", 26);
      \u0275\u0275elementStart(50, "div", 21)(51, "div", 22);
      \u0275\u0275text(52, " \u26A1 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 23)(54, "div", 24);
      \u0275\u0275text(55, "24/7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 25);
      \u0275\u0275text(57, "Canal de Atenci\xF3n");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(58, "div", 27)(59, "div", 28);
      \u0275\u0275element(60, "img", 29);
      \u0275\u0275elementStart(61, "div", 30)(62, "span", 31);
      \u0275\u0275element(63, "span", 7);
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "SEDE OFICIAL Y PARQUE CENTRAL");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 32)(67, "h3", 33);
      \u0275\u0275text(68, " Sal\xF3n Comunal & Entorno Recreativo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p", 34);
      \u0275\u0275text(70, " Espacio dotado con mobiliario completo, cocineta equipada, sonido b\xE1sico y amplias zonas verdes para eventos familiares y comunitarios. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 35)(72, "span", 36);
      \u0275\u0275text(73, " \u{1FA91} 80 Sillas y 10 Mesas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 36);
      \u0275\u0275text(75, " \u{1F373} Cocineta Dotada ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 36);
      \u0275\u0275text(77, " \u{1F333} Parque Familiar ");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(78, "div", 37)(79, "div", 38)(80, "div", 39)(81, "span", 40);
      \u0275\u0275text(82, " \u{1F4E2} CONVOCATORIA ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 41);
      \u0275\u0275text(84, "Pr\xF3xima Asamblea General Ordinaria:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span", 42);
      \u0275\u0275text(86, "Domingo 27 de Septiembre, 9:00 AM en el Sal\xF3n Comunal.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "a", 43)(88, "span");
      \u0275\u0275text(89, "Ver Orden del D\xEDa en PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91, "\u2192");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(92, "app-reserva-salon")(93, "app-transparencia")(94, "app-voz-barrio");
      \u0275\u0275elementStart(95, "section", 44)(96, "div", 45)(97, "div", 46)(98, "div", 47)(99, "span", 48);
      \u0275\u0275text(100, " \u{1F6E1}\uFE0F Directorio y Seguridad del Cuadrante ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "h3", 49);
      \u0275\u0275text(102, " \xBFNecesitas contactar a las autoridades del sector? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p", 50);
      \u0275\u0275text(104, " L\xEDnea directa del CAI del cuadrante, ambulancia y bomberos disponibles las 24 horas para la protecci\xF3n y tranquilidad de nuestros vecinos. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 51)(106, "a", 52)(107, "span");
      \u0275\u0275text(108, "\u{1F6A8} Emergencias: 123");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "a", 53)(110, "span");
      \u0275\u0275text(111, "\u{1F4AC} Escribir al Presidente JAC");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("Portal Oficial Comunitario \u2022 ", ctx.config.localidad);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.config.nombreJAC, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.config.barrio, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.config.lema, ". Gestiona la reserva del sal\xF3n comunal con calendario interactivo, revisa la rendici\xF3n de cuentas en PDF y participa activamente en tu comunidad. ");
      \u0275\u0275advance(10);
      \u0275\u0275property("href", ctx.whatsappOficialUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(83);
      \u0275\u0275property("href", ctx.whatsappOficialUrl, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [
    CommonModule,
    ReservaSalonComponent,
    TransparenciaComponent,
    VozBarrioComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogViewComponent, [{
    type: Component,
    args: [{
      selector: "app-catalog-view",
      standalone: true,
      imports: [
        CommonModule,
        ReservaSalonComponent,
        TransparenciaComponent,
        VozBarrioComponent
      ],
      template: `
    <div class="comunal-portal text-slate-100">
      <!-- SECCI\xD3N 1: BIENVENIDA E IDENTIDAD DEL BARRIO (HERO ESPACIOSO Y MODERNO) -->
      <section id="inicio" class="relative py-20 lg:py-28 overflow-hidden border-b border-slate-900 bg-[#020617]">
        <!-- Luz Ambiental Esmeralda Difusa -->
        <div class="absolute top-0 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="container-comunal relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <!-- Columna de Texto & Acci\xF3n (lg:col-span-7) -->
            <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
              
              <!-- Insignia P\xEDldora Esmeralda -->
              <div class="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Portal Oficial Comunitario \u2022 {{ config.localidad }}</span>
              </div>

              <!-- Titular Principal con Degradado Esmeralda -->
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {{ config.nombreJAC }} <br />
                <span class="text-gradient-emerald">
                  {{ config.barrio }}
                </span>
              </h1>

              <!-- Descripci\xF3n con Excelente Legibilidad -->
              <p class="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {{ config.lema }}. Gestiona la reserva del sal\xF3n comunal con calendario interactivo, revisa la rendici\xF3n de cuentas en PDF y participa activamente en tu comunidad.
              </p>

              <!-- Botones de Acci\xF3n Destacados con Buen Margen -->
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
                  <span>Reservar Sal\xF3n Comunal</span>
                </a>

                <a
                  [href]="whatsappOficialUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full sm:w-auto btn-dark-secondary text-base py-4 px-7 rounded-xl flex items-center justify-center gap-2.5"
                >
                  <span class="text-xl">\u{1F4AC}</span>
                  <span>WhatsApp Oficial JAC</span>
                </a>
              </div>

              <!-- Fila de M\xE9tricas Comunitarias Limpia y Espaciosa (Sin cajas pesadas) -->
              <div class="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12">
                <div class="flex items-center gap-3.5">
                  <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                    \u2713
                  </div>
                  <div class="text-left">
                    <div class="text-2xl sm:text-3xl font-black text-white leading-none">100%</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">Cuentas Claras en PDF</div>
                  </div>
                </div>

                <div class="w-px h-10 bg-slate-800 hidden sm:block"></div>

                <div class="flex items-center gap-3.5">
                  <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                    \u{1F465}
                  </div>
                  <div class="text-left">
                    <div class="text-2xl sm:text-3xl font-black text-white leading-none">80+</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">Capacidad en Sal\xF3n</div>
                  </div>
                </div>

                <div class="w-px h-10 bg-slate-800 hidden sm:block"></div>

                <div class="flex items-center gap-3.5">
                  <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                    \u26A1
                  </div>
                  <div class="text-left">
                    <div class="text-2xl sm:text-3xl font-black text-white leading-none">24/7</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">Canal de Atenci\xF3n</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Columna Galer\xEDa Fotogr\xE1fica Limpia & Elegante (lg:col-span-5) -->
            <div class="lg:col-span-5">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/25 group bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&auto=format&fit=crop&q=80"
                  alt="Instalaciones del Sal\xF3n Comunal y Parque de Los Rosales"
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
                    Sal\xF3n Comunal & Entorno Recreativo
                  </h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    Espacio dotado con mobiliario completo, cocineta equipada, sonido b\xE1sico y amplias zonas verdes para eventos familiares y comunitarios.
                  </p>
                  
                  <!-- Chips de Servicios -->
                  <div class="flex flex-wrap gap-2 pt-1">
                    <span class="bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-slate-300 px-2.5 py-1 rounded-lg">
                      \u{1FA91} 80 Sillas y 10 Mesas
                    </span>
                    <span class="bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-slate-300 px-2.5 py-1 rounded-lg">
                      \u{1F373} Cocineta Dotada
                    </span>
                    <span class="bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-slate-300 px-2.5 py-1 rounded-lg">
                      \u{1F333} Parque Familiar
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
              \u{1F4E2} CONVOCATORIA
            </span>
            <span class="font-bold text-white">Pr\xF3xima Asamblea General Ordinaria:</span>
            <span class="text-slate-300 hidden md:inline">Domingo 27 de Septiembre, 9:00 AM en el Sal\xF3n Comunal.</span>
          </div>
          <a href="#transparencia" class="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors ml-auto text-sm">
            <span>Ver Orden del D\xEDa en PDF</span>
            <span>\u2192</span>
          </a>
        </div>
      </div>

      <!-- SECCI\xD3N 2: ALQUILER Y RESERVA DEL SAL\xD3N COMUNAL -->
      <app-reserva-salon />

      <!-- SECCI\xD3N 3: TRANSPARENCIA Y RENDICI\xD3N DE CUENTAS EN PDF -->
      <app-transparencia />

      <!-- SECCI\xD3N 4: LA VOZ DEL BARRIO Y CLASIFICADOS VECINALES -->
      <app-voz-barrio />

      <!-- SECCI\xD3N 5: RED DE SEGURIDAD Y CONTACTO CON AUTORIDADES -->
      <section class="py-20 border-t border-slate-900 bg-[#020617]" id="contacto">
        <div class="container-comunal">
          <div class="card-clean-dark p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div class="space-y-3 text-center md:text-left relative z-10">
              <span class="badge-emerald-pill">
                \u{1F6E1}\uFE0F Directorio y Seguridad del Cuadrante
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                \xBFNecesitas contactar a las autoridades del sector?
              </h3>
              <p class="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                L\xEDnea directa del CAI del cuadrante, ambulancia y bomberos disponibles las 24 horas para la protecci\xF3n y tranquilidad de nuestros vecinos.
              </p>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-4 relative z-10 flex-shrink-0">
              <a
                href="tel:123"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>\u{1F6A8} Emergencias: 123</span>
              </a>
              <a
                [href]="whatsappOficialUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-emerald-glow text-sm py-3.5 px-6 font-bold shadow-md"
              >
                <span>\u{1F4AC} Escribir al Presidente JAC</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogViewComponent, { className: "CatalogViewComponent", filePath: "src/app/mfe-catalog/catalog-view.component.ts", lineNumber: 223 });
})();

// src/app/mfe-catalog/catalog.routes.ts
var CATALOG_ROUTES = [
  {
    path: "",
    component: CatalogViewComponent
  }
];
export {
  CATALOG_ROUTES
};
//# sourceMappingURL=chunk-4WJFCOZP.mjs.map
