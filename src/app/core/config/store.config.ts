export interface ComunalConfig {
  nombreJAC: string;
  barrio: string;
  localidad: string;
  ciudad: string;
  lema: string;
  direccionSalon: string;
  horarioAtencion: string;
  emailOficial: string;
  emailAlertasDirectiva: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappMensajePredeterminado: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  tarifaSugerida: {
    eventoFamiliar: number;
    eventoComunitario: number;
    depositoGarantia: number;
  };
}

export const COMUNAL_CONFIG: ComunalConfig = {
  nombreJAC: 'Junta de Acción Comunal',
  barrio: 'Barrio Los Rosales - Sector 4',
  localidad: 'Comuna Central',
  ciudad: 'Bogotá D.C., Colombia',
  lema: 'Unidos por el bienestar, el progreso y la convivencia de nuestra comunidad',
  direccionSalon: 'Carrera 14 # 45-20, Salón Comunal Los Rosales',
  horarioAtencion: 'Lunes a Viernes: 8:00 AM - 12:00 PM / 2:00 PM - 6:00 PM | Sábados: 9:00 AM - 1:00 PM',
  emailOficial: 'jac.losrosales.sector4@gmail.com',
  emailAlertasDirectiva: 'directiva.jac.losrosales@gmail.com',
  whatsappNumber: '573184370785',
  whatsappDisplay: '+57 (318) 437-0785',
  whatsappMensajePredeterminado: 'Hola JAC Los Rosales, soy vecino del sector y quisiera consultar información sobre las actividades y el salón comunal.',
  socialLinks: {
    facebook: 'https://facebook.com/JACLosRosalesSector4',
    instagram: 'https://instagram.com/jac_losrosales_oficial',
    youtube: 'https://youtube.com/@JACLosRosalesComunidad'
  },
  tarifaSugerida: {
    eventoFamiliar: 120000,
    eventoComunitario: 0,
    depositoGarantia: 50000
  }
};

// Retrocompatibilidad con STORE_CONFIG
export const STORE_CONFIG = {
  brandName: COMUNAL_CONFIG.nombreJAC + ' ' + COMUNAL_CONFIG.barrio,
  divisionTag: COMUNAL_CONFIG.lema,
  motto: COMUNAL_CONFIG.lema,
  supportEmail: COMUNAL_CONFIG.emailOficial,
  whatsappNumber: COMUNAL_CONFIG.whatsappNumber,
  whatsappDisplay: COMUNAL_CONFIG.whatsappDisplay,
  currencyCode: 'COP',
  currencySymbol: '$',
  socialLinks: COMUNAL_CONFIG.socialLinks
};
