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
  questions: Question[];

  constructor(name: string, questions: Question[]) {
    this.name = name;
    this.questions = questions;
  }
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
