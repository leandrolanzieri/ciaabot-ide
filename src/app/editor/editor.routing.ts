import { EditorComponent } from './editor.component';

export const routes = [
  { path: '', children: [
    { path: '', component: EditorComponent },
  ]},
];
