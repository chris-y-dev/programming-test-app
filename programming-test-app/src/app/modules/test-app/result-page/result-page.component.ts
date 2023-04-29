import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/utils/utils.service';
import { EventEmitterService } from '../../shared/services/event-emitter.service';
import { JdoodleService } from '../../shared/services/jdoodle.service';
import {
  ExecuteScript,
  ResultViewModel,
  TestCase,
} from '../../shared/models/models';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  @Input() submittedScripts: ExecuteScript[] = [];
  executionResponses$: ResultViewModel[] = [];

  constructor(
    private utilsService: UtilsService,
    private _jdoodleService: JdoodleService
  ) {}

  ngOnInit(): void {
    console.log(this.submittedScripts);

    this.executeScripts();
  }

  getDifficultyClass(difficulty: number | undefined): string {
    return this.utilsService.getDifficultyClass(difficulty);
  }

  getDifficultyText(difficulty: number | undefined): string {
    return this.utilsService.getDifficultyText(difficulty);
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

      scriptAndQuestion.question.fiveTestCases.forEach((testCase: TestCase) => {
        //For each question, test against all 5 test cases
        // this._jdoodleService
        //   .postScriptForExecution(scriptAndQuestion.script)
        //   .subscribe((res) => {
        //     //Check response against test case output.
        //     console.log('RES', res);
        //     // this.executionResponses$?.push(res);

        //     console.log('EXPECTEWD', testCase.outcome);

        //     let passed;

        //     if (res.output == testCase.outcome) {
        //       passed = true;
        //     } else {
        //       passed = false;
        //     }
        //     questionResult.passTestCase.push(passed);
        //   });

        let passed;

        if (testCase.outcome.length > 5) {
          passed = true;
        } else {
          passed = false;
        }
        questionResult.passTestCase.push(passed);
        // });
      });

      this.executionResponses$.push(questionResult);
    });
  }
}
