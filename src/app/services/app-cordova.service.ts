import { Injectable, Inject, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
const CORDOVA = 'cordova';

@Injectable({
  providedIn: 'root'
})
export class CordovaService {

  private resume = new BehaviorSubject<boolean>(null);
  constructor(
    @Inject('windowObject') private window: Window,
    private zone: NgZone
  ) {
    fromEvent(document, 'resume').subscribe(event => {
      this.zone.run(() => {
         this.resume.next(true);
      });
   });
  }

  get api(): any {
    return CORDOVA in this.window && this.window[CORDOVA];
  }

  get enabled(): boolean {
    return CORDOVA in this.window;
  }
}
