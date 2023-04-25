import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/modules/shared/models/language';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'programming-test-app';
  selectedLanguage: Language | null = null;

  constructor() {}

  ngOnInit(): void {}

  handleSelectLanguage(event: Language) {
    console.log(event);
    this.selectedLanguage = event;
  }
}
