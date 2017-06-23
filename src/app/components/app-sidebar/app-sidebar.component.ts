import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../providers/project.service';
import { AppSidebarService } from './app-sidebar.service';
import { CompilingService } from '../../providers/compiling.service';

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
    private compilingService: CompilingService
  ) { }

  public ngOnInit() {
    this.appSidebarService.getShowCCode().subscribe((show) => {
      this.showCCode = show;
    });
  }

  public toggleCCode() {
    this.appSidebarService.toggleCCode();
  }

  public verifyProgram() {
    this.compilingService.verifyProgram();
  }

}
