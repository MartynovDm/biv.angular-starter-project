import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'policy',
    loadChildren: () => import('../app/pages/policy/policy.module').then(m => m.PolicyModule),
  },
  { path: '**', redirectTo: 'policy' },
];

export const public_routes: Routes = [];
