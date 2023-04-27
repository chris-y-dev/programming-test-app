import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getDifficultyClass(difficulty: number | undefined): string {
    switch (difficulty) {
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

  getDifficultyText(difficulty: number | undefined): string {
    switch (difficulty) {
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
