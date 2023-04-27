import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '../../shared/models/language';
import { Router } from '@angular/router';
import { UtilsService } from '../../shared/utils/utils.service';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss'],
})
export class SelectModeComponent implements OnInit {
  @Input() selectedTopic: Topic | null = null;

  constructor(private router: Router, private utilsService: UtilsService) {}

  ngOnInit(): void {}

  onSelectMode(event: any) {
    console.log(this.selectedTopic);
    console.log(event.target.value);
    this.router.navigate(['test', event.target.value, this.selectedTopic?.id]);
  }

  getDifficultyClass(difficulty: number | undefined): string {
    return this.utilsService.getDifficultyClass(difficulty);
  }

  getDifficultyText(difficulty: number | undefined): string {
    return this.utilsService.getDifficultyText(difficulty);
  }
}
