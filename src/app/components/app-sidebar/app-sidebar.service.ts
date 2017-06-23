import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppSidebarService {
  public showCCodeSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  public showCCode() {
      this.showCCodeSubject.next(true);
  }

  public hideCCode() {
    this.showCCodeSubject.next(false);
  }

  public toggleCCode() {
    this.showCCodeSubject.next(!this.showCCodeSubject.getValue());
  }

  public getShowCCode(): Observable<boolean> {
      return this.showCCodeSubject.asObservable();
  }
}
