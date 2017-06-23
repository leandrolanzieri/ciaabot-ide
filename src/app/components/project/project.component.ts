import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { CiaabotsModels } from '../../models/ciaabots-models.enum';
import { ProjectService } from '../../providers/project.service';
import { NotificationsService } from 'angular2-notifications';

import * as path from 'path';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public project: Project = new Project();
  public ciaabots = CiaabotsModels;
  public directoryPath: string;
  public fileName: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private notification: NotificationsService
  ) { }

  public ngOnInit() {
  }

  public models(): string[] {
    let keys = Object.keys(this.ciaabots);
    return keys.slice(keys.length / 2);
  }
  public saveProject() {
    this.directoryPath = path.join(this.directoryPath, '/' + this.toHyphenCase(this.project.name));
    this.fileName = path.join(this.directoryPath, '/' + this.toHyphenCase(this.project.name) + '.cbp');
    this.projectService.createProject(this.project, this.directoryPath, this.fileName).subscribe((success) => {
      console.log(success);
      if (success) {
        this.router.navigate(['editor']);
      } else {
        this.notification.error(
          'Error al crear el proyecto',
          '  '
        );
      }
    })
  }
  public fileChange(event: any) {
    if (event.target.files[0]) {
      let path = event.target.files[0].path;
      this.directoryPath = path;
    }
  }

  public toHyphenCase(str: string): string {
    return str.replace(/\s+/g, '-').toLowerCase();
  }

  public getPathSeparator(): string {
    return path.sep;
  }

}
