import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageAndTopicService } from '../../shared/services/language-and-topic.service';
import { ExecuteScript, Question, Topic } from '../../shared/models/models';
@Component({
  selector: 'app-test-layout',
  templateUrl: './test-layout.component.html',
  styleUrls: ['./test-layout.component.scss'],
})
export class TestLayoutComponent implements OnInit {
  constructor(
    private router: Router,
    private ltService: LanguageAndTopicService
  ) {}

  @Input() currentToken: string | null = null;
  @Output() emitSubmittedScripts: EventEmitter<ExecuteScript[]> =
    new EventEmitter();

  selectedTopic: Topic | null = null;
  selectedMode_isTimed: boolean | null = null;
  randomQuestions: Question[] = [];
  currentQuestion: Question | null = null;

  totalQuestions = 5;
  currentProgress: number = 1;
  progressPercentage: number =
    (this.currentProgress / this.totalQuestions) * 100;

  ngOnInit(): void {
    this.selectedMode_isTimed = this.getMode(this.router.url.split('/')[2]);

    let topicId = this.router.url.split('/')[3];

    this.ltService
      .getTopicById(topicId)
      .then((data) =>
        data.subscribe((topic) => {
          this.selectedTopic = topic;
        })
      )
      .then(() => this.getFiveRandomQuestions())
      .then(() => (this.currentQuestion = this.randomQuestions[0]));
  }

  handleNextQuestion(event: number) {
    if (event == 6) {
      //Send code to JDoodle to compile
      //Navigate to results page
      console.log('FINISH');
      // this.router.navigate(['result', '001']);
    } else {
      this.currentProgress = event;
      this.progressPercentage =
        (this.currentProgress / this.totalQuestions) * 100;

      this.currentQuestion = this.randomQuestions[this.currentProgress - 1];
    }
  }

  getMode(mode: string) {
    let selectedMode = mode.toLocaleLowerCase();
    if (selectedMode == 'timed') {
      return true;
    } else {
      return false;
    }
  }

  async getFiveRandomQuestions() {
    var questionBank: Question[] | undefined = this.selectedTopic?.questions;
    if (questionBank != undefined) {
      for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * (questionBank.length - 1));
        this.randomQuestions.push(questionBank[randomIndex]);

        questionBank = questionBank.filter((q, index) => {
          return randomIndex != index;
        });
      }
    }

    // console.log(this.randomQuestions);
  }

  handleEmitScriptsForExecution(scripts: ExecuteScript[]) {
    this.emitSubmittedScripts.emit(scripts);
  }
}
