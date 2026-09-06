import { Injectable, signal, computed } from '@angular/core';
import { COMUNAL_CONFIG } from '../config/store.config';
import {
  ReservaSalon,
  DisponibilidadDia,
  LogroComunal,
  DocumentoTransparencia,
  PublicacionVozBarrio,
  NotificacionGmailSimulada,
  TipoEvento,
  HorarioReserva,
  EstadoReserva,
  CategoriaDocumento
} from '../models/comunal.models';

@Injectable({
  providedIn: 'root'
})
export class ComunalService {
  // Estado del Calendario Comunal
  readonly fechaActual = new Date();
  readonly mesActual = signal<number>(this.fechaActual.getMonth()); // 0-11
  readonly anoActual = signal<number>(this.fechaActual.getFullYear());
  readonly fechaSeleccionada = signal<string>(this.formatearFecha(this.fechaActual));

  // Simulación de reservas registradas
  readonly reservas = signal<ReservaSalon[]>([
    {
      id: 'res-101',
      nombreVecino: 'Carlos Andrés Mendoza',
      direccion: 'Manzana 4, Casa 12',
      telefono: '315 889 4521',
      email: 'carlos.mendoza@gmail.com',
      tipoEvento: 'familiar',
      fecha: this.obtenerFechaRelativa(2),
      horario: 'tarde',
      asistentesAprox: 35,
      observaciones: 'Cumpleaños infantil familiar',
      normasAceptadas: true,
      estado: 'ocupado',
      fechaSolicitud: '2026-09-01'
    },
    {
      id: 'res-102',
      nombreVecino: 'Comité de Deportes y Juventud',
      direccion: 'Sector Polideportivo',
      telefono: '310 445 6789',
      email: 'deportes.losrosales@gmail.com',
      tipoEvento: 'comunitario',
      fecha: this.obtenerFechaRelativa(5),
      horario: 'manana',
      asistentesAprox: 60,
      observaciones: 'Premiación torneo intercuadras de microfútbol',
      normasAceptadas: true,
      estado: 'ocupado',
      fechaSolicitud: '2026-09-02'
    },
    {
      id: 'res-103',
      nombreVecino: 'Dra. Patricia Silva (Salud Local)',
      direccion: 'Puesto de Salud Comunal',
      telefono: '320 671 2290',
      email: 'patricia.silva@saludcomunal.gov.co',
      tipoEvento: 'cultural',
      fecha: this.obtenerFechaRelativa(9),
      horario: 'completa',
      asistentesAprox: 80,
      observaciones: 'Jornada de vacunación y tamizaje para adultos mayores',
      normasAceptadas: true,
      estado: 'ocupado',
      fechaSolicitud: '2026-09-03'
    },
    {
      id: 'res-104',
      nombreVecino: 'Familia Ramírez Gómez',
      direccion: 'Torre 2, Apto 304',
      telefono: '318 901 3412',
      email: 'familia.ramirez@gmail.com',
      tipoEvento: 'familiar',
      fecha: this.obtenerFechaRelativa(14),
      horario: 'noche',
      asistentesAprox: 40,
      observaciones: 'Aniversario de bodas',
      normasAceptadas: true,
      estado: 'revision',
      fechaSolicitud: '2026-09-04'
    }
  ]);

  // Logros y Transparencia
  readonly logros = signal<LogroComunal[]>([
    {
      id: 'logro-1',
      titulo: 'Vías & Calles Recuperadas',
      cifra: '1,450',
      unidad: 'metros lineales',
      descripcion: 'Bacheo, pavimentación comunitaria y señalización vial en las calles 12, 14 y 15 con apoyo del presupuesto participativo.',
      icono: 'road',
      progreso: 92,
      categoria: 'Infraestructura'
    },
    {
      id: 'logro-2',
      titulo: 'Parques y Zonas Verdes',
      cifra: '3',
      unidad: 'parques embellecidos',
      descripcion: 'Siembra de 180 árboles nativos, instalación de 8 bancas nuevas y modernización de luminarias LED ecológicas.',
      icono: 'tree',
      progreso: 100,
      categoria: 'Medio Ambiente'
    },
    {
      id: 'logro-3',
      titulo: 'Eventos & Talleres Vecinales',
      cifra: '42',
      unidad: 'jornadas realizadas',
      descripcion: 'Actividades de aeróbicos para adultos mayores, cine al parque infantil y talleres de huertas urbanas comunitarias.',
      icono: 'users',
      progreso: 88,
      categoria: 'Cultura & Deporte'
    },
    {
      id: 'logro-4',
      titulo: 'Presupuesto Ejecutado con Cuentas Claras',
      cifra: '96.4%',
      unidad: 'de transparencia',
      descripcion: '$48.500.000 COP ejecutados e informados en asambleas ordinarias con soportes contables y facturación abierta.',
      icono: 'chart',
      progreso: 96,
      categoria: 'Gestión Fiscal'
    }
  ]);

  // Documentos Oficiales de Transparencia (PDF)
  readonly documentos = signal<DocumentoTransparencia[]>([
    {
      id: 'doc-01',
      titulo: 'Acta de Asamblea General Ordinaria N° 34',
      categoria: 'acta',
      fecha: '2026-08-15',
      periodo: 'Segundo Semestre 2026',
      tamano: '2.4 MB',
      descargas: 142,
      descripcion: 'Aprobación del plan de inversión del salón comunal, elección del comité de convivencia y rendición de cuentas.',
      firmadoPor: 'Presidente JAC & Secretaria General'
    },
    {
      id: 'doc-02',
      titulo: 'Balance Financiero y Estado de Tesorería - Q2 2026',
      categoria: 'balance',
      fecha: '2026-07-30',
      periodo: 'Abril - Junio 2026',
      tamano: '1.8 MB',
      descargas: 189,
      descripcion: 'Ingresos por alquiler del salón comunal, aportes de eventos, gastos de mantenimiento y saldo en cuenta bancaria comunitaria.',
      firmadoPor: 'Tesorera Comunal & Fiscal de Control'
    },
    {
      id: 'doc-03',
      titulo: 'Informe de Gestión Anual de la Directiva Comunal',
      categoria: 'informe',
      fecha: '2026-06-20',
      periodo: 'Gestión 2025 - 2026',
      tamano: '3.9 MB',
      descargas: 215,
      descripcion: 'Compendio fotográfico, proyectos radicados ante la Alcaldía Local, convenios de seguridad y metas alcanzadas.',
      firmadoPor: 'Junta Directiva en Pleno'
    },
    {
      id: 'doc-04',
      titulo: 'Estatutos Oficiales y Normas de Convivencia JAC',
      categoria: 'estatuto',
      fecha: '2026-01-10',
      periodo: 'Vigencia Actualizada 2026-2028',
      tamano: '1.2 MB',
      descargas: 320,
      descripcion: 'Reglamento interno de asambleas, funciones de dignatarios, derechos y deberes de los afiliados del barrio.',
      firmadoPor: 'Registraduría Comunal & Personería'
    },
    {
      id: 'doc-05',
      titulo: 'Balance de Caja Menor y Mantenimiento Salón Comunal',
      categoria: 'balance',
      fecha: '2026-08-31',
      periodo: 'Agosto 2026',
      tamano: '850 KB',
      descargas: 98,
      descripcion: 'Detalle de pintura, cambio de griferías, revisión de sonido y compra de silletería para el salón comunitario.',
      firmadoPor: 'Administradora del Salón & Fiscal'
    }
  ]);

  // Muro Comunitario y Voz del Barrio
  readonly publicacionesVoz = signal<PublicacionVozBarrio[]>([
    {
      id: 'voz-1',
      tipo: 'noticia',
      titulo: 'Gran Jornada de Vacunación Canina y Felina Gratuita',
      autor: 'Comité de Salud y Bienestar Animal',
      fecha: 'Hace 2 días',
      contenido: 'Este sábado desde las 8:30 AM en el parque principal frente al salón comunal tendremos puesto de vacunación antirrábica y desparasitación para las mascotas de nuestros vecinos. ¡Trae a tu peludito!',
      imagenUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=700&auto=format&fit=crop&q=80',
      etiqueta: 'Salud & Mascotas',
      estado: 'publicado'
    },
    {
      id: 'voz-2',
      tipo: 'emprendimiento',
      titulo: 'Panadería & Pastelería Artesanal "Doña Esperanza"',
      autor: 'Doña Esperanza Morales',
      direccionVecino: 'Calle 14 # 45-32 (Frente a la placita)',
      fecha: 'Ayer',
      contenido: 'Vecinos, preparamos pan de maíz recién horneado a las 6:30 AM y 4:00 PM, tortas para cumpleaños y postres tradicionales. Apoyemos el comercio de nuestra propia cuadra.',
      imagenUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&auto=format&fit=crop&q=80',
      contacto: '312 345 6789',
      etiqueta: 'Comercio Local',
      estado: 'publicado'
    },
    {
      id: 'voz-3',
      tipo: 'cronica',
      titulo: 'Crónica: Recordando a don Efraín, pionero de nuestro barrio',
      autor: 'Hernando Rojas (Vecino fundador)',
      fecha: 'Hace 4 días',
      contenido: 'En 1982 cuando apenas llegaba el agua a estas colinas, don Efraín organizaba las faenas dominicales con sancocho comunitario para construir nuestro primer sendero. Hoy rendimos tributo a su legado de solidaridad.',
      imagenUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=700&auto=format&fit=crop&q=80',
      etiqueta: 'Memoria Barrial',
      estado: 'publicado'
    },
    {
      id: 'voz-4',
      tipo: 'alerta',
      titulo: 'Campaña: Sacar la basura únicamente en los horarios establecidos',
      autor: 'Comité de Convivencia y Aseo',
      fecha: 'Hace 5 días',
      contenido: 'Recordamos a todos los vecinos que el camión recolector pasa los martes, jueves y sábados a las 7:00 PM. Evitemos dejar bolsas en las esquinas que atraen perritos callejeros y tapan los sumideros.',
      etiqueta: 'Convivencia',
      estado: 'publicado'
    }
  ]);

  // Alerta de notificación automática de Gmail simulada
  readonly modalGmailAbierto = signal<boolean>(false);
  readonly ultimaNotificacionGmail = signal<NotificacionGmailSimulada | null>(null);

  // Filtro de documentos en Transparencia
  readonly filtroDocumento = signal<CategoriaDocumento | 'todos'>('todos');

  readonly documentosFiltrados = computed(() => {
    const filtro = this.filtroDocumento();
    const todos = this.documentos();
    if (filtro === 'todos') return todos;
    return todos.filter(d => d.categoria === filtro);
  });

  // Generador dinámico de días del mes para el calendario
  readonly diasDelMes = computed<DisponibilidadDia[]>(() => {
    const mes = this.mesActual();
    const ano = this.anoActual();
    const totalDias = new Date(ano, mes + 1, 0).getDate();
    const reservasExistentes = this.reservas();

    const dias: DisponibilidadDia[] = [];

    for (let dia = 1; dia <= totalDias; dia++) {
      const fechaObj = new Date(ano, mes, dia);
      const diaSemana = fechaObj.getDay(); // 0 = Domingo, 6 = Sábado
      const fechaIso = this.formatearFecha(fechaObj);

      // Verificamos si hay reservas registradas en esta fecha
      const reservasEnFecha = reservasExistentes.filter(r => r.fecha === fechaIso);
      let estado: EstadoReserva = 'disponible';
      const eventos: string[] = [];

      if (reservasEnFecha.length > 0) {
        const tieneOcupada = reservasEnFecha.some(r => r.estado === 'ocupado');
        estado = tieneOcupada ? 'ocupado' : 'revision';
        reservasEnFecha.forEach(r => eventos.push(`${r.horario.toUpperCase()}: ${r.nombreVecino}`));
      }

      dias.push({
        fecha: fechaIso,
        diaNumero: dia,
        esFinDeSemana: diaSemana === 0 || diaSemana === 6,
        estado,
        eventos
      });
    }

    return dias;
  });

  // Nombre legible del mes y año actual
  readonly nombreMesActual = computed<string>(() => {
    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return `${meses[this.mesActual()]} ${this.anoActual()}`;
  });

  // Navegación en el calendario
  mesSiguiente(): void {
    if (this.mesActual() === 11) {
      this.mesActual.set(0);
      this.anoActual.update(a => a + 1);
    } else {
      this.mesActual.update(m => m + 1);
    }
  }

  mesAnterior(): void {
    if (this.mesActual() === 0) {
      this.mesActual.set(11);
      this.anoActual.update(a => a - 1);
    } else {
      this.mesActual.update(m => m - 1);
    }
  }

  seleccionarFecha(fecha: string): void {
    this.fechaSeleccionada.set(fecha);
  }

  // Enviar y registrar solicitud de reserva del salón
  solicitarReserva(datos: {
    nombreVecino: string;
    direccion: string;
    telefono: string;
    email: string;
    tipoEvento: TipoEvento;
    fecha: string;
    horario: HorarioReserva;
    asistentesAprox: number;
    observaciones?: string;
    normasAceptadas: boolean;
  }): { exito: boolean; mensaje: string } {
    if (!datos.normasAceptadas) {
      return { exito: false, mensaje: 'Es indispensable aceptar las normas de convivencia del salón comunal.' };
    }

    // Verificar si el día ya está ocupado en el mismo horario
    const conflicto = this.reservas().find(
      r => r.fecha === datos.fecha && (r.horario === datos.horario || r.horario === 'completa' || datos.horario === 'completa')
    );

    if (conflicto && conflicto.estado === 'ocupado') {
      return {
        exito: false,
        mensaje: `La fecha ${datos.fecha} en horario ${datos.horario} ya se encuentra reservada. Por favor selecciona otra franja o fecha.`
      };
    }

    const nuevaReserva: ReservaSalon = {
      id: 'res-' + Date.now().toString().slice(-4),
      ...datos,
      estado: 'revision',
      fechaSolicitud: this.formatearFecha(new Date())
    };

    this.reservas.update(prev => [nuevaReserva, ...prev]);

    // Generar la notificación automática por Gmail simulada
    const notificacion: NotificacionGmailSimulada = {
      id: 'gmail-' + Date.now(),
      destinatario: datos.email,
      remitente: COMUNAL_CONFIG.emailOficial,
      asunto: `Confirmación de Solicitud de Reserva Salón Comunal #${nuevaReserva.id} - ${COMUNAL_CONFIG.barrio}`,
      fechaHora: new Date().toLocaleString('es-CO', { dateStyle: 'full', timeStyle: 'short' }),
      resumen: `Tu solicitud para el día ${datos.fecha} (${datos.horario}) ha sido radicada con éxito y notificada a la directiva de la JAC.`,
      detalles: {
        nombre: datos.nombreVecino,
        fecha: datos.fecha,
        horario: this.obtenerEtiquetaHorario(datos.horario),
        tipoEvento: this.obtenerEtiquetaEvento(datos.tipoEvento),
        telefono: datos.telefono,
        direccion: datos.direccion
      }
    };

    this.ultimaNotificacionGmail.set(notificacion);
    this.modalGmailAbierto.set(true);

    return {
      exito: true,
      mensaje: '¡Solicitud radicada con éxito! Se ha disparado la notificación automática a tu Gmail y a la directiva comunal.'
    };
  }

  cerrarModalGmail(): void {
    this.modalGmailAbierto.set(false);
  }

  // Registrar propuesta vecinal en el muro
  subirAporteVecinal(aporte: {
    tipo: 'noticia' | 'emprendimiento' | 'cronica' | 'alerta';
    titulo: string;
    autor: string;
    direccionVecino?: string;
    contenido: string;
    imagenUrl?: string;
    contacto?: string;
  }): void {
    const nuevaPub: PublicacionVozBarrio = {
      id: 'voz-' + Date.now(),
      ...aporte,
      fecha: 'Hoy (En revisión)',
      estado: 'revision',
      etiqueta: aporte.tipo === 'emprendimiento' ? 'Comercio Local' : 'Participación'
    };

    this.publicacionesVoz.update(prev => [nuevaPub, ...prev]);
  }

  // Descarga simulada de documentos en PDF
  descargarDocumento(doc: DocumentoTransparencia): void {
    this.documentos.update(docs =>
      docs.map(d => (d.id === doc.id ? { ...d, descargas: d.descargas + 1 } : d))
    );
    // Simular descarga en el navegador con un archivo de texto con encabezado oficial
    const contenidoPdfSimulado = `
============================================================
${COMUNAL_CONFIG.nombreJAC.toUpperCase()}
${COMUNAL_CONFIG.barrio.toUpperCase()}
Personería Jurídica Vigente - Alcaldía Mayor
============================================================
DOCUMENTO OFICIAL DE TRANSPARENCIA: ${doc.titulo.toUpperCase()}
Categoría: ${doc.categoria.toUpperCase()}
Periodo: ${doc.periodo}
Fecha de Emisión: ${doc.fecha}
Firmado por: ${doc.firmadoPor}

DESCRIPCIÓN Y BALANCE:
${doc.descripcion}

Este documento fue generado y consultado a través del Portal Comunal Oficial.
Compromiso de Gobierno Abierto y Cuentas Claras para los Vecinos.
============================================================
`;
    const blob = new Blob([contenidoPdfSimulado], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.titulo.replace(/[\s/]/g, '_')}_JAC.txt`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  // Suscripción al boletín
  registrarSuscripcion(email: string, nombre: string): { exito: boolean; mensaje: string } {
    if (!email || !email.includes('@')) {
      return { exito: false, mensaje: 'Por favor ingresa un correo electrónico válido.' };
    }
    return {
      exito: true,
      mensaje: `¡Bienvenido(a) ${nombre || 'vecino(a)'}! Has quedado inscrito(a) para recibir circulares oficiales y convocatorias en tu correo.`
    };
  }

  // Utilidades de formato
  private formatearFecha(d: Date): string {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  private obtenerFechaRelativa(diasAdelante: number): string {
    const target = new Date();
    target.setDate(target.getDate() + diasAdelante);
    return this.formatearFecha(target);
  }

  obtenerEtiquetaHorario(h: HorarioReserva): string {
    switch (h) {
      case 'manana': return 'Mañana (8:00 AM - 1:00 PM)';
      case 'tarde': return 'Tarde (2:00 PM - 6:00 PM)';
      case 'noche': return 'Noche (7:00 PM - 11:00 PM)';
      case 'completa': return 'Jornada Completa (8:00 AM - 10:00 PM)';
    }
  }

  obtenerEtiquetaEvento(t: TipoEvento): string {
    switch (t) {
      case 'familiar': return 'Reunión / Cumpleaños Familiar';
      case 'comunitario': return 'Evento Comunitario / Asambleas';
      case 'cultural': return 'Taller Cultural / Formación';
      case 'asamblea': return 'Asamblea de Copropietarios / Bloque';
      case 'infantil': return 'Fiesta Infantil';
    }
  }
}
