import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mfe-catalog/catalog.routes').then(m => m.CATALOG_ROUTES),
    title: 'Roma 4 // Salón Comunal, Reserva y Transparencia'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
