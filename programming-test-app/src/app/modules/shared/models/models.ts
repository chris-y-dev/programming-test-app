export class Language {
  name: string;
  topics: Topic[];
  defaultScript: string;
  disabled: boolean;

  constructor(
    name: string,
    topic: Topic[],
    defaultScript: string,
    disabled: boolean = false
  ) {
    this.name = name;
    this.topics = topic;
    this.defaultScript = defaultScript;
    this.disabled = disabled;
  }
}

export class Topic {
  id: string;
  name: string;
  difficulty: TopicDifficulty;
  description: string[];
  questions: Question[];
  disabled: boolean;

  constructor(
    id: string,
    name: string,
    difficulty: number,
    description: string[],
    questions: Question[],
    disabled: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.difficulty = difficulty;
    this.description = description;
    this.questions = questions;
    this.disabled = disabled;
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
  examples: TestCase[];
  executionScript: string;
  userScript: string | null;

  constructor(
    id: string,
    title: string,
    description: string,
    timeLimit: number,
    defaultFunctionWithParameters: string,
    defaultTestCase: TestCase,
    fiveTestCases: TestCase[],
    examples: TestCase[],
    executionScript: string,
    userScript: string | null = null
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.timeLimit = timeLimit;
    this.defaultFunctionWithParameters = defaultFunctionWithParameters;
    this.defaultTestCase = defaultTestCase;
    this.fiveTestCases = fiveTestCases;
    this.examples = examples;
    this.executionScript = executionScript;
    this.userScript = userScript;
  }
}

export class TestCase {
  parameter: any;
  outcome: any;
  explaination: string | undefined;

  constructor(
    parameter: any,
    outcome: any,
    explaination: string | undefined = undefined
  ) {
    this.parameter = parameter;
    this.outcome = outcome;
    this.explaination = explaination;
  }
}

export class ExecuteScript {
  script: string | undefined;
  question: Question;

  constructor(script: string | undefined, question: Question) {
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
