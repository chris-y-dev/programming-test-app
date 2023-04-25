import { Topic, Question, Language } from './../models/language';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageAndTopicService {
  constructor() {}

  js: Language = new Language('JavaScript', [
    new Topic('Array basics', [
      new Question(
        'js01',
        'Did she say hello?',
        'Write simple function to check if array of texts include Hello'
      ),
      new Question(
        'js02',
        'Minus 2 if Even',
        'Write simple function to minus 2 for all even numbers only'
      ),
    ]),
  ]);

  csharp: Language = new Language('C#', [
    new Topic('Array basics', [
      new Question(
        'cs01',
        'Did she say hello?',
        'Write simple function to check if array of texts include Hello'
      ),
      new Question(
        'cs02',
        'Minus 2 if Even',
        'Write simple function to minus 2 for all even numbers only'
      ),
    ]),
  ]);

  allLanguages: Language[] = [this.js, this.csharp, this.js, this.csharp];

  async getAllLanguages(): Promise<Observable<Language[]>> {
    return of(this.allLanguages);
  }

  async getAllTopics() {
    return;
  }
}
