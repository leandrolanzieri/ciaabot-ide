import { Injectable, NgZone } from '@angular/core';
import * as childProcess from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import { ProjectService } from './project.service';
import { Workspace } from '../models/workspace';
import { NotificationsService } from 'angular2-notifications';
import * as mkdirp from 'mkdirp';

@Injectable()
export class CompilingService {
  private workspace: Workspace;
  constructor(
    private projectService: ProjectService,
    private notificationsService: NotificationsService,
    private ngZone: NgZone
  ) {
    this.projectService.getWorkspace().subscribe((workspace) => {
      this.ngZone.run(() => {
        this.workspace = workspace;
      });
    });
  }

  public compileProgram() {
    this.createMainFile();
    if (this.workspace) {
      let scriptName = 'build';
      switch (os.platform()) {
        case 'win32':
          scriptName += '.bat';
          break;

        default:
          scriptName += '.sh';
          break;
      }
      this.notificationsService.info('Compilando', 'Aguarde unos instantes', {
        timeOut: 0,
        maxStack: 1
      });
      childProcess.exec( 
        'cd ' + path.join(this.workspace.path, 'scripts') + 
        ' && chmod +x ' + scriptName +
        ' && ./' + scriptName, (err, stdout) => {
          if (err) {
            this.notificationsService.error('Problema al compilar', 'Verificar el código');
            console.log('Error al descargar programa', err);
            return;
          }
          this.notificationsService.success('Programa compilado', 'Se ha compilado con éxito');
          console.log('Descarga finalizada');
          console.log(stdout);
        }
      );
    }
  }

  public downloadProgram() {
    this.createMainFile();
    if (this.workspace) {
      let scriptName = 'build_download';
      this.notificationsService.info('Descargando', 'Aguarde unos instantes', {
        timeOut: 0,
        maxStack: 1
      });

      switch (os.platform()) {
        case 'win32':
          scriptName += '.bat';
          childProcess.execFile(path.join(this.workspace.path, scriptName), (err, stdout) => {
            if (err) {
              this.notificationsService.error('Problema al descargar', 'Verificar la conexión al robot');
              console.log('Error al descargar programa', err);
              return;
            }
            this.notificationsService.success('Programa descargado', 'Se ha descargado con éxito');
            console.log('Descarga finalizada');
            console.log(stdout);
          });
          break;

        default:
          scriptName += '.sh';
          childProcess.exec( 
            'cd ' + path.join(this.workspace.path, 'scripts') + 
            ' && chmod +x ' + scriptName +
            ' && ./' + scriptName, (err, stdout) => {
              if (err) {
                this.notificationsService.error('Problema al descargar', 'Verificar la conexión al robot');
                console.log('Error al descargar programa', err);
                return;
              }
              this.notificationsService.success('Programa descargado', 'Se ha descargado con éxito');
              console.log('Descarga finalizada');
              console.log(stdout);
            }
          );
          break;
      }
    }
  }

  private createMainFile(): boolean {
    let fileDescriptor: number;
    let file = path.join(this.workspace.path, 'app/src/main.c');

    /* Check if app structure is there */
    mkdirp(path.join(this.workspace.path, 'app/src'), (err) => {
      if (err) {
        this.notificationsService.alert('No se puede crear la carpeta');
        return false;
      } else {
        /* Try to open file */
        try {
          fileDescriptor = fs.openSync(file, 'w');
        } catch (error) {
          this.notificationsService.alert('No se puede crear el archivo');
          return false;
        }

        /* Try to write to file */
        try {
          fs.writeFileSync(file, this.workspace.project.code.replace(/\n/, os.EOL));
        } catch (error) {
          this.notificationsService.alert('No se puede escribir el archivo');
          /* Closing the file */
          fs.closeSync(fileDescriptor);
          return false;
        }

        /* Closing the file */
        fs.closeSync(fileDescriptor);
        return true;
      }
    });
  }
}
