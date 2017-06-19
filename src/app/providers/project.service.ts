import { Injectable, NgZone } from '@angular/core';
import { Project } from '../models/project';
import * as fs from 'fs';
import { ConfirmationService } from './confirmation.service';
import { Dialog } from '../models/dialog';
import { NotificationsService } from 'angular2-notifications';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class ProjectService {
  public project: Project;
  constructor(
    private confirmationService: ConfirmationService,
    private notificationsService: NotificationsService,
    private ngZone: NgZone
  ) { }

  public create(project: Project): Observable<boolean> {
    this.project = project;
    console.log('[Project Service]: Intentando guardar el proyecto ', project);
    return this.saveProjectToFile();
  }

  public saveProjectToFile(): Observable<boolean> {
    let retValue = new Observable(observer => {
      fs.open(this.project.file, 'w', (err, fd) => {
        if (err) {
          this.notificationsService.alert('No se puede abrir el archivo');
          observer.next(false);
          observer.complete();
        }

        fs.writeFile(this.project.file, JSON.stringify(this.project), (errWrite) => {
          if (errWrite) {
            observer.next(false);
            observer.complete();
          } else {
            this.ngZone.run(() => {
              this.notificationsService.success(
                'Guardar Proyecto',
                'Guardado',
                {
                  timeOut: 3000,
                  showProgressBar: true,
                  pauseOnHover: false,
                  clickToClose: false,
                  maxLength: 10,
                  animate: 'fromRight'
                }
              );
            });
            observer.next(true);
            observer.complete();
          }
        });
      });
    });
    return retValue;
  }

  public setBlocklyBlocks(blocks: any) {
    if (this.project) {
      this.project.blocks = blocks;
    }
  }

  public getBlocklyBlocks(): string {
    if (this.project) {
      if (this.project.blocks) {
        return this.project.blocks;
      }
    }
    return null;
  }

  public setBlocklyCode(code: string) {
    if (this.project) {
      this.project.code = code;
    }
  }

  public getBlocklyCode(): string {
    if (this.project) {
      if (this.project.code) {
        return this.project.code;
      }
    }
    return null;
  }

}
