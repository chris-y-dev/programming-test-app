import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnChanges {
  @Input() questionTimeLimitSeconds: number | undefined = undefined;
  @Output() emitTimesUpEvent: EventEmitter<boolean> = new EventEmitter();

  minutes: string = '';
  seconds: string = '';
  targetTime: number | null = null;
  oneMinuteLeft: boolean = false;
  timesUp: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('TIMER CHANGE', changes);

    if (changes['questionTimeLimitSeconds'] != null) {
      this.questionTimeLimitSeconds =
        changes['questionTimeLimitSeconds'].currentValue;
      this.startTimer();
    }
  }

  ngOnInit(): void {
    this.startTimer();
  }

  resetTimer() {
    this.emitTimesUpEvent.emit(false);
    this.timesUp = false;
    this.minutes = '';
    this.seconds = '';
    this.oneMinuteLeft = false;
  }

  startTimer(): void {
    //Current time
    this.targetTime =
      new Date().getTime() + (this.questionTimeLimitSeconds! + 1) * 1000;

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();

      // Calculate the time remaining
      const timeRemaining = this.targetTime! - now;

      // Calculate the minutes and seconds remaining
      this.minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      )
        .toString()
        .padStart(2, '0');

      this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0');

      if (timeRemaining < 60000) {
        this.oneMinuteLeft = true;
      }

      // If the countdown is finished, clear the interval
      if (timeRemaining < 1000) {
        clearInterval(countdownInterval);
        this.emitTimesUpEvent.emit(true);
        this.timesUp = true;
        this.minutes = '00';
        this.seconds = '00';
      }
    }, 1000);
  }
}
