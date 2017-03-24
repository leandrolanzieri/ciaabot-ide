import { HomeComponent } from './home.component';


export const routes = [
  { path: '', children: [
    { path: '', component: HomeComponent },
  ]},
];
