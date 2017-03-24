import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home#HomeModule' },
  { path: 'editor', loadChildren: './editor#EditorModule' },
  { path: 'configuration', loadChildren: './configuration#ConfigurationModule' },
  { path: 'ayuda', loadChildren: './ayuda/#AyudaModule' },
  { path: '**', redirectTo: 'home' },
];
