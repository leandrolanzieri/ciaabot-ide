import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class BlocklyService {
    private blocklyResize = new BehaviorSubject<boolean>(null);

    public getResize(): Observable<boolean> {
        return this.blocklyResize.asObservable();
    }

    public triggerResize() {
        this.blocklyResize.next(true);
    }
}
