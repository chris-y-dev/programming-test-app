import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../shared/models/models';

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.scss'],
})
export class ProblemPanelComponent implements OnInit {
  @Input() currentQuestion: Question | null = null;

  constructor() {}

  ngOnInit(): void {}

  //Makes output look nicer using new lines
  getLineSeparatedInputOutput(example: any | any[]) {
    if (!Array.isArray(example)) {
      return example;
    } else {
      let str = '';

      example.forEach((item, index) => {
        if (index < example.length - 1) {
          str += `${item + '<br>'}`;
        } else {
          str += `${item}`;
        }
      });
      return str;
    }
  }
}
