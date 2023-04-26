import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '../../shared/models/language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss'],
})
export class SelectModeComponent implements OnInit {
  @Input() selectedTopic: Topic | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelectMode(event: any) {
    console.log(this.selectedTopic);
    console.log(event.target.value);
    this.router.navigate(['test', event.target.value, this.selectedTopic?.id]);
  }

  getDifficultyClass(): string {
    switch (this.selectedTopic?.difficulty) {
      case 1:
        return 'bg-beginner';
      case 2:
        return 'bg-intermediate';
      case 3:
        return 'bg-difficult';
      default:
        return '';
    }
  }

  getDifficultyText(): string {
    switch (this.selectedTopic?.difficulty) {
      case 1:
        return 'Beginner';
      case 2:
        return 'Intermediate';
      case 3:
        return 'Advanced';
      default:
        return '';
    }
  }
}
