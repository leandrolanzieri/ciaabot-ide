import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdInputModule, MdSelectModule } from '@angular/material';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SimpleNotificationsModule } from 'angular2-notifications';

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
import { ConfirmationService } from './providers/confirmation.service';

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
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    MdInputModule,
    MdSelectModule
  ],
  providers: [ElectronService, ProjectService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
