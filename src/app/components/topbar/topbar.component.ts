import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
const dialog = require('electron').remote.dialog;
import { ProjectService } from '../../providers/project.service';
import { Dialog } from '../../models/dialog';
import { ConfirmationService } from '../../providers/confirmation.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  public dialog: Dialog = new Dialog();
  @ViewChild('confirmationModal') public confirmationModal: ModalDirective;
  private dialogSubscription: Subscription;

  constructor(
    private projectService: ProjectService,
    private confirmationService: ConfirmationService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) { }

  public ngOnInit() {
    this.dialogSubscription = this.confirmationService.getDialog().subscribe((dialog: Dialog) => {
      this.dialog = dialog;
      this.changeDetector.detectChanges();
      this.confirmationModal.show();
    });
  }

  public saveProject() {
    this.projectService.saveCurrentProject();
  }

  public openProject() {
    console.log('Open project');
    dialog.showOpenDialog({
      filters: [

        { name: 'Ciaabot Project', extensions: ['cbp'] }

      ]
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

}
