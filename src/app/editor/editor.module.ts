import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './editor.routing';
import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    EditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditorModule {
  public static routes = routes;
}
