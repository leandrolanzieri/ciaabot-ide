import { Component, OnInit, NgZone } from '@angular/core';
import { ProjectService } from '../../providers/project.service';
import { Subscription } from 'rxjs';
import { Workspace } from '../../models/workspace';
import { AppSidebarService } from '../app-sidebar/app-sidebar.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public workspace: Workspace;
  public workspaceSubscription: Subscription;
  public showCCode: boolean = false;
  constructor(
    private projectService: ProjectService,
    private ngZone: NgZone,
    private appSidebarService: AppSidebarService
  ) { }

  public ngOnInit() {
    this.workspaceSubscription = this.projectService.getWorkspace().subscribe((workspace: Workspace) => {
      this.ngZone.run(() => {
        this.workspace = workspace;
      });
    });

    this.appSidebarService.getShowCCode().subscribe((show: boolean) => {
      this.ngZone.run(() => {
        this.showCCode = show;
      });
    });
  }

  public onBlocklyCodeChange(blocklyCode: string) {
    this.ngZone.run(() => {
      this.projectService.setBlocklyCode(blocklyCode);
    });
  }

  public onBlocklyBlocksChange(blocklyBlocks: any) {
    this.projectService.setBlocklyBlocks(blocklyBlocks);
  }

}
