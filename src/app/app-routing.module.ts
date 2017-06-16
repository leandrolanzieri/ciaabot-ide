import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EditorComponent } from './components/editor/editor.component';
import { HelpComponent } from './components/help/help.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'configuration',
        component: ConfigurationComponent
    }, {
        path: 'editor',
        component: EditorComponent
    }, {
        path: 'help',
        component: HelpComponent
    }, {
        path: 'project',
        component: ProjectComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
