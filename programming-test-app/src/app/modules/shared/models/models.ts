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
  description: string[];
  questions: Question[];

  constructor(
    id: string,
    name: string,
    difficulty: number,
    description: string[],
    questions: Question[]
  ) {
    this.id = id;
    this.name = name;
    this.difficulty = difficulty;
    this.description = description;
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
  defaultFunctionWithParameters: string;
  defaultTestCase: any;
  fiveTestCases: any[];
  userScript: string | null;

  constructor(
    id: string,
    title: string,
    description: string,
    timeLimit: number,
    defaultFunctionWithParameters: string,
    defaultTestCase: TestCase,
    fiveTestCases: TestCase[],
    userScript: string | null = null
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.timeLimit = timeLimit;
    this.defaultFunctionWithParameters = defaultFunctionWithParameters;
    this.defaultTestCase = defaultTestCase;
    this.fiveTestCases = fiveTestCases;
    this.userScript = userScript;
  }
}

export class TestCase {
  parameter: any;
  outcome: any;

  constructor(parameter: any, outcome: any) {
    this.parameter = parameter;
    this.outcome = outcome;
  }
}

export class ExecuteScript {
  script: string | null;
  question: Question;

  constructor(script: string | null, question: Question) {
    this.script = script;
    this.question = question;
  }
}

export class ResultViewModel {
  question: string;
  passTestCase: boolean[];

  constructor(question: string, passTestCase: boolean[] = []) {
    this.question = question;
    this.passTestCase = passTestCase;
  }
}
