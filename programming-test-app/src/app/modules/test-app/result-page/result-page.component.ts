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
    /**EXECUTE USING JDOODLE CREDITS  */
    /**COMMENT OUT THIS METHOD IF NO CREDITS REMAIN  */
    this.executeTestCasesUsingJDoodle();

    /**UNCOMMENT THIS TO GENERATE RANDOM PASS/FAIL IF NO CREDITS REMAIN  */
    // this.executeMockTestCases();
  }

  //Executes 5 test cases for each question
  executeTestCasesUsingJDoodle() {
    //For submitted Script, execute against 5 test case
    this.submittedScripts.forEach((scriptAndQuestion) => {
      let questionResult = new ResultViewModel(
        scriptAndQuestion.question.title
      );

      console.log('SUBMITTED SCRIPT', scriptAndQuestion.script);

      //Test against 5 test cases
      scriptAndQuestion.question.fiveTestCases.forEach((testCase: TestCase) => {
        this._jdoodleService
          .postScriptForExecution(scriptAndQuestion.script, testCase.parameter)
          .subscribe((res) => {
            //Check response against test case output.
            console.log('RES', res);

            let passed = false;

            if (res.output == testCase.outcome) {
              passed = true;
            } else {
              passed = false;
            }

            //Add to array of results
            questionResult.passTestCase.push(passed);
          });
      });

      //Add to array of question results
      this.executionResponses$.push(questionResult);
    });
  }

  executeMockTestCases() {
    this.submittedScripts.forEach((scriptAndQuestion) => {
      let questionResult = new ResultViewModel(
        scriptAndQuestion.question.title
      );

      console.log('SUBMITTED SCRIPT', scriptAndQuestion.script);

      //Generates a pass/fail statically
      scriptAndQuestion.question.fiveTestCases.forEach((testCase: TestCase) => {
        let passed;

        if (testCase.outcome.length > 5) {
          passed = true;
        } else {
          passed = false;
        }
        questionResult.passTestCase.push(passed);
      });

      this.executionResponses$.push(questionResult);
    });
  }

  handleBeginQuiz() {
    this._router.navigate(['/']);
  }
}
