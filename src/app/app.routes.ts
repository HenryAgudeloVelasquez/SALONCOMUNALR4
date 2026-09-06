import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mfe-catalog/catalog.routes').then(m => m.CATALOG_ROUTES),
    title: 'JAC Barrio Los Rosales Sector 4 // Portal Comunal, Reserva de Salón y Transparencia'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
