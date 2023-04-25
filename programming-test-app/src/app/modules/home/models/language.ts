export class Language {
  name: string;
  topics: Topic[];

  constructor(name: string, topic: Topic[]) {
    this.name = name;
    this.topics = topic;
  }
}

export class Topic {
  name: string;
  difficulty: TopicDifficulty;
  questions: Question[];

  constructor(name: string, difficulty: number, questions: Question[]) {
    this.name = name;
    this.difficulty = difficulty;
    this.questions = questions;
  }
}

export enum TopicDifficulty {
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3,
}

export class Question {
  id: string;
  title: string;
  description: string;

  constructor(id: string, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
