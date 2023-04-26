export class Language {
  name: string;
  topics: Topic[];

  constructor(name: string, topic: Topic[]) {
    this.name = name;
    this.topics = topic;
  }
}

export class Topic {
  id: string;
  name: string;
  difficulty: TopicDifficulty;
  questions: Question[];

  constructor(
    id: string,
    name: string,
    difficulty: number,
    questions: Question[]
  ) {
    this.id = id;
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
  timeLimit: number;

  constructor(
    id: string,
    title: string,
    description: string,
    timeLimit: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.timeLimit = timeLimit;
  }
}
