import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/utils/utils.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {}

  getDifficultyClass(difficulty: number | undefined): string {
    return this.utilsService.getDifficultyClass(difficulty);
  }

  getDifficultyText(difficulty: number | undefined): string {
    return this.utilsService.getDifficultyText(difficulty);
  }

  getModeClass(mode: string | undefined): string {
    switch (mode?.toLocaleLowerCase()) {
      case 'timed':
        return 'bg-timed';
      case 'untimed':
        return 'bg-untimed';
      default:
        return '';
    }
  }
}
