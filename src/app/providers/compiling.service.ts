import { Injectable, NgZone } from '@angular/core';
import * as childProcess from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import { ProjectService } from './project.service';
import { Workspace } from '../models/workspace';
import { NotificationsService } from 'angular2-notifications';

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

  public verifyProgram() {
    console.log('Verificando en ', this.workspace.path);
    this.createMainFile();
    if (this.workspace) {
      childProcess.execFile(path.join(this.workspace.path, 'scripts/verify.bat'), (err, stdout) => {
        if (err) {
          console.log('Error al verificar programa', err);
          return;
        }
        console.log(stdout);
      });
    }
  }

  private createMainFile(): boolean {
    let fileDescriptor: number;
    let file = path.join(this.workspace.path, 'app/src/main.c');
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
}
