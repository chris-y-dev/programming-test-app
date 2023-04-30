import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../shared/models/models';

@Component({
  selector: 'app-test-case-panel',
  templateUrl: './test-case-panel.component.html',
  styleUrls: ['./test-case-panel.component.scss'],
})
export class TestCasePanelComponent implements OnInit, OnChanges {
  @Input() currentQuestion: Question | null = null;

  @Input() testResponse$: {
    output: any;
    statusCode: any;
    memory: any;
    cpuTime: any;
    compilationStatus: any;
  } | null = null;

  displayInput: string = '';
  passOrFail: boolean | null = null;
  @Input() showTestCasePanel: boolean = false;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    this.generateInputDisplay();
  }

  ngOnInit(): void {}

  generateInputDisplay() {
    this.displayInput = '';

    if (
      Object.prototype.toString.call(
        this.currentQuestion?.defaultTestCase.parameter
      ) == '[object Array]'
    ) {
      this.currentQuestion?.defaultTestCase.parameter.forEach(
        (paramItem: any) => {
          this.displayInput += paramItem + ' <br> ';
        }
      );
    } else {
      this.displayInput = this.currentQuestion?.defaultTestCase.parameter;
    }

    this.getPassOrFail();
  }

  getPassOrFail() {
    if (
      this.testResponse$?.output.split('\n').join('') ==
      this.currentQuestion?.defaultTestCase.outcome
    ) {
      this.passOrFail = true;
    } else {
      this.passOrFail = false;
    }
  }

  addLineBreaksToOutput(event: any) {
    let output = '';

    output = event.replace('\n', '<br>');

    return output;
  }
}
