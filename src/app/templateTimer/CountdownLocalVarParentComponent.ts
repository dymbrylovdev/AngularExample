import {Component, ViewChild} from "@angular/core";
import {CountdownTimerComponent} from "./CountdownTimerComponent";


@Component({
  selector: 'app-countdown-parent-lv',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <input type="number" #item/>

    <button (click)="createTimer(item.value)">timer</button><br>
    <button (click)="timer.start()">Start</button>
    <button (click)="timer.stop()">Stop</button>
    <div class="seconds">{{timer.seconds}}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
})
export class CountdownLocalVarParentComponent{
  @ViewChild(CountdownTimerComponent)
  private TimerComponent!:CountdownTimerComponent;

  createTimer(event: any) {
    this.TimerComponent.seconds = event
  }

}
