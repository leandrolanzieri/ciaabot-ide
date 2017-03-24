import { AyudaComponent } from './ayuda.component';

export const routes = [
  { path: '', children: [
    { path: '', component: AyudaComponent },
  ]},
];
