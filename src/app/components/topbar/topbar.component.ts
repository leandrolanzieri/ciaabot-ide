import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjectService } from '../../providers/project.service';
import { Dialog } from '../../models/dialog';
import { ConfirmationService } from '../../providers/confirmation.service';
import { Subscription } from 'rxjs';

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
  ) { }

  public ngOnInit() {
    this.dialogSubscription = this.confirmationService.getDialog().subscribe((dialog: Dialog) => {
      this.dialog = dialog;
      this.changeDetector.detectChanges();
      this.confirmationModal.show();
    });
  }

  public saveProject() {
    this.projectService.saveProjectToFile();
  }

}
