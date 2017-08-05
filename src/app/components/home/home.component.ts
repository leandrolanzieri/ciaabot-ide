import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../providers/project.service';
import { RecentProject } from '../../models/recent-project';
import { Router } from '@angular/router';

const dialog = require('electron').remote.dialog;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor(
    public projectService: ProjectService,
    private router: Router
  ) { }

  public ngOnInit() {
  }

  public openRecentProject(recentProject: RecentProject) {
    this.projectService.openRecentProject(recentProject).subscribe((success) => {
      if (success) {
        this.router.navigate(['editor']);
      }
    });
  }

  public openProject() {
    console.log('Open project');
    dialog.showOpenDialog({
      filters: [{ name: 'Ciaabot Project', extensions: ['cbp'] }]
    }, (fileNames) => {

      if (fileNames === undefined) {
        return;
      }
      const fileName = fileNames[0];
      this.projectService.openProject(fileName).subscribe((success) => {
        if (success) {
          this.router.navigate(['editor']);
        }
      });
    });
  }

  public removeRecentProject(event, project: RecentProject) {
    event.stopPropagation();
    this.projectService.removeRecentProject(project);
  }

}
