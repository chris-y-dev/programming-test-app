import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../shared/models/language';

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.scss'],
})
export class ProblemPanelComponent implements OnInit {
  @Input() currentQuestion: Question | null = null;

  constructor() {}

  ngOnInit(): void {}
}
