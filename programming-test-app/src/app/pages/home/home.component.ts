import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Language, Topic } from 'src/app/modules/shared/models/language';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'programming-test-app';
  selectedLanguage: Language | null = null;
  selectedTopic: Topic | null = null;
  step: number = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleSelectLanguage(event: Language) {
    console.log(event);
    this.selectedLanguage = event;
    this.step++;
  }

  handleSelectTopic(event: Topic) {
    console.log(event);
    this.selectedTopic = event;
    this.step++;
  }

  handleSelectMode(event: any) {
    console.log(event);
    this.router.navigate(['/test']);
  }
}
