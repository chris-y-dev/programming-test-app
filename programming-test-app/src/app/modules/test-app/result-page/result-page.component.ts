import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/utils/utils.service';
import { JdoodleService } from '../../shared/services/jdoodle.service';
import {
  ExecuteScript,
  ResultViewModel,
  TestCase,
  Topic,
} from '../../shared/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  @Input() selectedTopic: Topic | null = null;
  @Input() selectedTimed: boolean | null = null;

  @Input() submittedScripts: ExecuteScript[] = [];
  executionResponses$: ResultViewModel[] = [];

  constructor(
    private _utilsService: UtilsService,
    private _router: Router,
    private _jdoodleService: JdoodleService
  ) {}

  ngOnInit(): void {
    console.log(this.submittedScripts);

    this.executeScripts();
  }

  getDifficultyClass(difficulty: number | undefined): string {
    return this._utilsService.getDifficultyClass(difficulty);
  }

  getDifficultyText(difficulty: number | undefined): string {
    return this._utilsService.getDifficultyText(difficulty);
  }

  getModeClass(mode: string | undefined): string {
    switch (mode?.toLocaleLowerCase()) {
      case 'timed':
        return 'bg-timed';
      case 'untimed':
        return 'bg-untimed';
      default:
        return '';
    }
  }

  executeScripts() {
    this.submittedScripts.forEach((scriptAndQuestion) => {
      let questionResult = new ResultViewModel(
        scriptAndQuestion.question.title
      );

      console.log(scriptAndQuestion.script);

      // scriptAndQuestion.question.fiveTestCases.forEach((testCase: TestCase) => {
      //   //For each question, test against all 5 test cases
      //   this._jdoodleService
      //     .postScriptForExecution(scriptAndQuestion.script, scriptAndQuestion.script)
      //     .subscribe((res) => {
      //       //Check response against test case output.
      //       console.log('RES', res);
      //       // this.executionResponses$?.push(res);

      //       let passed;

      //       if (res.output == testCase.outcome) {
      //         passed = true;
      //       } else {
      //         passed = false;
      //       }
      //       questionResult.passTestCase.push(passed);
      //     });

      //   let passed;

      //   if (testCase.outcome.length > 5) {
      //     passed = true;
      //   } else {
      //     passed = false;
      //   }
      //   questionResult.passTestCase.push(passed);
      //   // });
      // });

      this.executionResponses$.push(questionResult);
    });
  }

  handleBeginQuiz() {
    this._router.navigate(['/']);
  }
}
