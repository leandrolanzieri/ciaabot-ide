import { ConfigurationComponent } from './configuration.component';

export const routes = [
  { path: '', children: [
    { path: '', component: ConfigurationComponent },
  ]},
];
