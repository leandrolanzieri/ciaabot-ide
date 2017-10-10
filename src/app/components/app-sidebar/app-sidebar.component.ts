import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../providers/project.service';
import { AppSidebarService } from './app-sidebar.service';
import { CompilingService } from '../../providers/compiling.service';
import { BlocklyService } from '../blockly/blockly.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  public showCCode: boolean = false;

  constructor(
    public projectService: ProjectService,
    private appSidebarService: AppSidebarService,
    private compilingService: CompilingService,
    private blocklyService: BlocklyService,
  ) { }

  public ngOnInit() {
    this.appSidebarService.getShowCCode().subscribe((show) => {
      this.showCCode = show;
    });
  }

  public toggleCCode() {
    this.appSidebarService.toggleCCode();
    setTimeout(() => {
      this.blocklyService.triggerResize();
    }, 1);
  }

  public compileProgram() {
    this.compilingService.compileProgram();
  }

  public downloadProgram() {
    this.compilingService.downloadProgram();
  }

}
