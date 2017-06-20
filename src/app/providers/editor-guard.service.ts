import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';

@Injectable()
export class EditorGuardService {

  constructor(
    private projectService: ProjectService
  ) { }

  public canActivate() {
    return this.projectService.openProject();
  }

}
