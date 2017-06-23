import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';

@Injectable()
export class EditorGuardService {

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  public canActivate() {
    const activate = this.projectService.existsOpenProject();
    if (!activate) {
      this.router.navigate(['home']);
    }
    return activate;
  }

}
