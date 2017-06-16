import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { CiaabotsModels } from '../../models/ciaabots-models.enum';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public project: Project = new Project();
  public ciaabots = CiaabotsModels;
  constructor() { }

  public ngOnInit() {
  }

  public modelos(): string[] {
    let keys = Object.keys(this.ciaabots);
    return keys.slice(keys.length / 2);
  }
  public guardar() {
    console.log("Saving ", this.project);
  }
  public fileChange(event: any) {
    if (event.target.files[0]) {
      let path = event.target.files[0].path;
      console.log("File ", path);
      this.project.file = path;
    }
  }
}
