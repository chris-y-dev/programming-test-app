import { Topic, Question, Language, TopicDifficulty } from '../models/models';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { js, csharp, allLanguages, allQuestions, allTopics } from './data';

@Injectable({
  providedIn: 'root',
})
export class LanguageAndTopicService {
  constructor() {}
  js = js;
  csharp = csharp;
  allLanguages = allLanguages;
  allTopics = allTopics;
  allQuestions = allQuestions;

  async getAllLanguages(): Promise<Observable<Language[]>> {
    return of(this.allLanguages);
  }

  async getAllTopics(): Promise<Observable<Topic[]>> {
    return of(this.allTopics);
  }

  async getTopicById(id: string): Promise<Observable<Topic | null>> {
    var foundTopic = this.allTopics.find((t) => t.id == id);

    if (foundTopic != undefined) {
      return of(foundTopic);
    } else {
      return of(null);
    }
  }

  async getQuestionById(id: string): Promise<Observable<Question | null>> {
    var foundQuestion = this.allQuestions.find((q) => q.id == id);

    if (foundQuestion != undefined) {
      return of(foundQuestion);
    } else {
      return of(null);
    }
  }
}
