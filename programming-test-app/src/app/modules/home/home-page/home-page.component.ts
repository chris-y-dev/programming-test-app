import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Language, Topic } from 'src/app/modules/shared/models/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  title = 'programming-test-app';
  selectedLanguage: Language | null = null;
  selectedTopic: Topic | null = null;
  step: number = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleSelectLanguage(event: Language) {
    this.selectedLanguage = event;
    this.step++;
  }

  handleSelectTopic(event: Topic) {
    this.selectedTopic = event;
    this.step++;
  }

  handleSelectMode(event: any) {
    this.router.navigate(['/test']);
  }
}
