import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProjectService } from '../../providers/project.service';
import { Project } from '../../models/project';
import { Subscription } from 'rxjs';
import { Workspace } from '../../models/workspace';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  public workspace: Workspace;
  private projectSubscription: Subscription;

  constructor(
    private projectService: ProjectService,
    private changeDetector: ChangeDetectorRef,
  ) { }

  public ngOnInit() {
    this.projectSubscription = this.projectService.getWorkspace().subscribe((workspace: Workspace) => {
      this.workspace = workspace;
      this.changeDetector.detectChanges();
    });
  }

}
