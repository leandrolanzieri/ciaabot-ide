import { Injectable, NgZone } from '@angular/core';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import { Observable, Observer, Subject } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import { LocalStorage } from 'ng2-webstorage';

import { ConfirmationService } from './confirmation.service';
import { Dialog } from '../models/dialog';
import { Project } from '../models/project';
import { Workspace } from '../models/workspace';
import { LocalStorageService } from 'ng2-webstorage';
import { UserPreferences } from '../models/user-preferences';
import { RecentProject } from '../models/recent-project';

@Injectable()
export class ProjectService {
  public workspace: Workspace = new Workspace();
  public workspaceSubscription = new Subject<Workspace>();
  public userPreferences: UserPreferences = new UserPreferences();

  constructor(
    private confirmationService: ConfirmationService,
    private notificationsService: NotificationsService,
    private ngZone: NgZone,
    private storage: LocalStorageService
  ) {
    this.workspaceSubscription.next(this.workspace);
    this.updatePersistedWorkspace();
    const preferences = this.storage.retrieve('user-preferences');
    if (preferences) {
      this.userPreferences = preferences;
    }
  }

  public getWorkspace(): Observable<Workspace> {
    return this.workspaceSubscription.asObservable();
  }

  /**
   * Creates a project file and the basic folder structure with basic files
   * @param project Project to be created
   * @param directory Absolute path to the container directory
   * @param file Absolute path to the project file
   */
  public createProject(project: Project, directory: string, file: string): Observable<boolean> {
    this.workspace.project = project;
    this.workspace.path = directory;
    this.workspace.projectFile = file;
    this.workspaceSubscription.next(this.workspace);
    this.updatePersistedWorkspace();
    this.addToRecentProjects(project);
    return this.createProjectStructure(directory, file);
  }

  public existsOpenProject(): boolean {
    return this.workspace.project != null;
  }

  public saveProjectToFile(file): boolean {
    let fileDescriptor: number;
    try {
      fileDescriptor = fs.openSync(file, 'w');
    } catch (error) {
      this.notificationsService.alert('No se puede crear el archivo');
      return false;
    }

    try {
      fs.writeFileSync(file, JSON.stringify(this.workspace.project));
    } catch (error) {
      this.notificationsService.alert('No se puede escribir el archivo');
      return false;
    }
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
    return true;
  }

  public setBlocklyBlocks(blocks: any) {
    if (this.workspace.project) {
      this.workspace.project.blocks = blocks;
      this.workspaceSubscription.next(this.workspace);
      this.updatePersistedWorkspace();
    }
  }

  public getBlocklyBlocks(): string {
    if (this.workspace.project) {
      if (this.workspace.project.blocks) {
        return this.workspace.project.blocks;
      }
    }
    return null;
  }

  public setBlocklyCode(code: string) {
    if (this.workspace.project) {
      this.workspace.project.code = code;
      this.workspaceSubscription.next(this.workspace);
      this.updatePersistedWorkspace();
    }
  }

  public getBlocklyCode(): string {
    if (this.workspace.project) {
      if (this.workspace.project.code) {
        return this.workspace.project.code;
      }
    }
    return null;
  }

  public getRecentProjects(): Array<{ name: string, projectFile: string, lastOpened: Date }> {
    return this.userPreferences.recentProjects;
  }

  /**
   * Creates directories and copies the files needed to compile and load code to the board.
   * @param project Project to be created
   */
  private createProjectStructure(directory: string, file: string): Observable<boolean> {
    let retValue = new Observable((observer) => {
      let error: boolean = false;
      mkdirp(directory, (err) => {
        if (err) {
          console.error(err);
          observer.next(false);
          observer.complete();
          return;
        } else {
          if (this.saveProjectToFile(file)) {
            console.log('Archivo cbp creado');
          } else {
            console.log('No se pudo crear el cbp');
            observer.next(false);
            observer.complete();
            return;
          }
        }

        mkdirp(directory + '/app/src', (err) => {
          if (err) {
            console.error(err);
            observer.next(false);
            observer.complete();
            return;
          }

          mkdirp(directory + '/app/inc', (err) => {
            if (err) {
              console.error(err);
              observer.next(false);
              observer.complete();
              return;
            }

            mkdirp(directory + '/libs', (err) => {
              if (err) {
                console.error(err);
                observer.next(false);
                observer.complete();
                return;
              }

              mkdirp(directory + '/scripts', (err) => {
                if (err) {
                  console.error(err);
                  observer.next(false);
                  observer.complete();
                  return;
                } else {
                  observer.next(true);
                  observer.complete();
                }
              });
            });
          });
        });
      });
    });
    return retValue;
  }

  private updatePersistedWorkspace() {
    this.storage.store('workspace', this.workspace);
  }

  private updatePersistedUserPreferences() {
    this.storage.store('user-preferences', this.userPreferences);
  }

  private addToRecentProjects(project: Project) {
    /* If the project does not exists, it is pushed into the array */
    if (-1 === this.userPreferences.recentProjects.findIndex((recentProject) => {
      return recentProject.name === project.name && recentProject.projectFile === this.workspace.projectFile;
    })) {
      const recentProject = new RecentProject();
      recentProject.name = project.name;
      recentProject.projectFile = this.workspace.projectFile;
      this.userPreferences.recentProjects.push(recentProject);
      this.userPreferences.recentProjects.splice(0, 1);

      this.userPreferences.recentProjects = this.userPreferences.recentProjects.sort((a, b) => {
        if (a.lastOpened instanceof Date && b.lastOpened instanceof Date) {
          return b.lastOpened.getTime() - a.lastOpened.getTime();
        } else if (a.lastOpened instanceof Date) {
          return -1;
        } else {
          return 1;
        }
      });

      this.updatePersistedUserPreferences();
    }
  }
}
