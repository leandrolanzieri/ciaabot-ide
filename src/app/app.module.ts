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
import { Ng2Webstorage } from 'ng2-webstorage';

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
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { ConfirmationService } from './providers/confirmation.service';
import { EditorGuardService } from './providers/editor-guard.service';

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
    BottomBarComponent
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
    MdSelectModule,
    Ng2Webstorage
  ],
  providers: [ElectronService, ProjectService, ConfirmationService, EditorGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
