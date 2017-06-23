import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../providers/project.service';
import { RecentProject } from '../../models/recent-project';
import { Router } from '@angular/router';

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

  public openProject(recentProject: RecentProject) {
    this.projectService.openRecentProject(recentProject).subscribe((success) => {
      if (success) {
        this.router.navigate(['editor']);
      }
    });
  }

}
