import {Component, Input, OnDestroy, Output} from "@angular/core";
@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnDestroy{

  intervalId = 0;
  message = "";
  seconds = 11;
  ngOnDestroy(): void {
    this.clearTimer();
  }

  start() {
    console.log(this.intervalId)
    this.countDown();
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;

  }
  private clearTimer() {
    clearInterval(this.intervalId);
  }
  private  countDown() {
    this.clearTimer();
    this.intervalId = setInterval(()=> {
      this.seconds-=1;
      if (this.seconds===0){
        this.message = 'Blast off!';
        this.clearTimer();
      }else {
        if (this.seconds<0)
          this.seconds = 10;
        this.message = `T-${this.seconds} seconds and counting`;
      }
    },1000);

  }


}
