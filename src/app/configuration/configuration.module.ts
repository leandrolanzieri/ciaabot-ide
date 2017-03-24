import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './configuration.routing';
import { ConfigurationComponent } from './configuration.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
})
export class ConfigurationModule {
  public static routes = routes;
}
