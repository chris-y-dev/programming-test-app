import { Topic, Question, Language, TopicDifficulty } from '../models/models';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { js, allLanguages, allQuestions, allTopics } from './data';

@Injectable({
  providedIn: 'root',
})
export class LanguageAndTopicService {
  constructor() {}
  js = js;
  allLanguages = allLanguages;
  allTopics = allTopics;
  allQuestions = allQuestions;

  getAllLanguages(): Observable<Language[]> {
    return of(this.allLanguages);
  }

  getLanguageById(name: string): Observable<Language | null> {
    var foundLang = this.allLanguages.find((l) => l.name == name);

    if (foundLang != undefined) {
      return of(foundLang);
    } else {
      return of(null);
    }
  }

  getAllTopics(): Observable<Topic[]> {
    return of(this.allTopics);
  }

  getTopicById(id: string): Observable<Topic | null> {
    var foundTopic = this.allTopics.find((t) => t.id == id);

    if (foundTopic != undefined) {
      return of(foundTopic);
    } else {
      return of(null);
    }
  }

  getQuestionById(id: string): Observable<Question | null> {
    var foundQuestion = this.allQuestions.find((q) => q.id == id);

    if (foundQuestion != undefined) {
      return of(foundQuestion);
    } else {
      return of(null);
    }
  }
}
