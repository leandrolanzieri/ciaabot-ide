import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './ayuda.routing';
import { AyudaComponent } from './ayuda.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AyudaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
})
export class AyudaModule {
  public static routes = routes;
}
