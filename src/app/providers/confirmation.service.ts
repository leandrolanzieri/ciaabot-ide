import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dialog } from '../models/dialog';

@Injectable()
export class ConfirmationService {
  public dialog = new Subject<Dialog>();

  constructor() { }

  public openDialog(dialog: Dialog) {
    this.dialog.next(dialog);
  }
  public clearDialog() {
    this.dialog.next();
  }
  public getDialog() {
    return this.dialog.asObservable();
  }
}
