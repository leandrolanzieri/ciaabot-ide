import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { ProjectService } from './providers/project.service';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EditorComponent } from './components/editor/editor.component';
import { HelpComponent } from './components/help/help.component';
import { BlocklyComponent } from './components/blockly/blockly.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppSidebarComponent,
    ConfigurationComponent,
    EditorComponent,
    HelpComponent,
    BlocklyComponent,
    TopbarComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [ElectronService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
