import { Injectable, NgZone } from '@angular/core';
import * as childProcess from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import { ProjectService } from './project.service';
import { Workspace } from '../models/workspace';
import { NotificationsService } from 'angular2-notifications';
import * as mkdirp from 'mkdirp';
import { IdeConfigurationService } from './ide-configuration.service';
import { ElectronService } from './electron.service';

@Injectable()
export class CompilingService {
  private workspace: Workspace;

  constructor(
    private projectService: ProjectService,
    private notificationsService: NotificationsService,
    private ngZone: NgZone,
    private ideConfigurationService: IdeConfigurationService,
    private electronService: ElectronService,
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
      this.notificationsService.info('Compilando', 'Aguarde unos instantes', {
        timeOut: 0,
        maxStack: 1
      });

      childProcess.exec('make -C %PROJECT_PATH% Compilar_proyecto', {
        env: {
          PROJECT_PATH: this.workspace.path,
          PATH: this.electronService.getEnvVariables().PATH + this.electronService.getPathDelimiter() + this.getFormattedPaths(),
        }
      }, (err, stdout) => {
        if (err) {
          this.notificationsService.error('Problema al compilar', 'Verificar el código');
          console.error('Error al compilar programa', err);
          console.info('Salida:', stdout);
          return;
        }
        this.notificationsService.success('Programa compilado', 'Se ha compilado con éxito');
        console.log('Compilacion finalizada');
        console.info(stdout);
      });
    }
  }

  public downloadProgram() {
    this.createMainFile();
    if (this.workspace) {
      this.notificationsService.info('Descargando', 'Aguarde unos instantes', {
        timeOut: 0,
        maxStack: 1
      });

      childProcess.exec(
        'make -C %PROJECT_PATH% Compilar_proyecto' +
        '&& make -C %PROJECT_PATH% Grabar_proyecto_en_flash'
        , {
        env: {
          PROJECT_PATH: this.workspace.path,
          PATH: this.electronService.getEnvVariables().PATH + this.electronService.getPathDelimiter() + this.getFormattedPaths(),
        }
      }, (err, stdout) => {
        if (err) {
          this.notificationsService.error('Problema al descargar', 'Verificar la conexión al robot');
          console.error('Error al compilar programa', err);
          console.info('Salida:', stdout);
          return;
        }
        this.notificationsService.success('Programa descargado', 'Se ha descargado con éxito');
        console.log('Descarga finalizada');
        console.info(stdout);
      });
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

  /**
   * Returns the configured paths as a semicolon-separated string.
   */
  private getFormattedPaths(): string {
    let retValue = '';
    this.ideConfigurationService.getPaths().forEach((path, index, array) => {
      retValue += path;
      if (index < (array.length - 1)) {
        retValue += this.electronService.getPathDelimiter();
      }
    });
    return retValue;
  }
}
