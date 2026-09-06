export type TipoEvento = 'familiar' | 'comunitario' | 'cultural' | 'asamblea' | 'infantil';
export type HorarioReserva = 'manana' | 'tarde' | 'noche' | 'completa';
export type EstadoReserva = 'disponible' | 'ocupado' | 'revision' | 'confirmada';

export interface ReservaSalon {
  id: string;
  nombreVecino: string;
  direccion: string;
  telefono: string;
  email: string;
  tipoEvento: TipoEvento;
  fecha: string; // YYYY-MM-DD
  horario: HorarioReserva;
  asistentesAprox: number;
  observaciones?: string;
  normasAceptadas: boolean;
  estado: EstadoReserva;
  fechaSolicitud: string;
}

export interface DisponibilidadDia {
  fecha: string; // YYYY-MM-DD
  diaNumero: number;
  esFinDeSemana: boolean;
  estado: EstadoReserva;
  eventos?: string[];
}

export interface LogroComunal {
  id: string;
  titulo: string;
  cifra: string;
  unidad: string;
  descripcion: string;
  icono: string;
  progreso: number; // 0-100
  categoria: string;
}

export type CategoriaDocumento = 'acta' | 'balance' | 'informe' | 'estatuto';

export interface DocumentoTransparencia {
  id: string;
  titulo: string;
  categoria: CategoriaDocumento;
  fecha: string;
  periodo: string;
  tamano: string;
  descargas: number;
  descripcion: string;
  firmadoPor: string;
}

export type TipoVoz = 'noticia' | 'emprendimiento' | 'cronica' | 'alerta';

export interface PublicacionVozBarrio {
  id: string;
  tipo: TipoVoz;
  titulo: string;
  autor: string;
  direccionVecino?: string;
  fecha: string;
  contenido: string;
  imagenUrl?: string;
  contacto?: string;
  etiqueta?: string;
  estado: 'publicado' | 'revision';
}

export interface NotificacionGmailSimulada {
  id: string;
  destinatario: string;
  asunto: string;
  fechaHora: string;
  remitente: string;
  resumen: string;
  detalles: {
    nombre: string;
    fecha: string;
    horario: string;
    tipoEvento: string;
    telefono: string;
    direccion: string;
  };
}
