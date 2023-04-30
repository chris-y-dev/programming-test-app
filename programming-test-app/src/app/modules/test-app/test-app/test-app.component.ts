import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JdoodleService } from '../../shared/services/jdoodle.service';
import { Observable } from 'rxjs';
import { ExecuteScript, Language, Topic } from '../../shared/models/models';
import { LanguageAndTopicService } from '../../shared/services/language-and-topic.service';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.scss'],
})
export class TestAppComponent implements OnInit {
  @Input() submittedScripts: ExecuteScript[] = [];

  selectedLanguage: Language | null = null;
  selectedTopic: Topic | null = null;
  selectedTimed: boolean | null = null;
  currentToken: any = undefined;
  showResults = false;
  executionResponses$: any[] | null = [];

  constructor(
    private router: Router,
    private _ltService: LanguageAndTopicService,
    private _jdoodleService: JdoodleService
  ) {}

  ngOnInit(): void {
    //TODO: Change static language by getting value from URL
    this._ltService
      .getLanguageById('NodeJS')
      .subscribe((foundLang) => (this.selectedLanguage = foundLang));

    this.selectedTimed = this.getSelectedTimed(this.router.url.split('/')[2]);

    let topicId = this.router.url.split('/')[3];

    this._ltService.getTopicById(topicId).subscribe((topic: any) => {
      this.selectedTopic = topic;
    });

    console.log(this.selectedTopic);

    // this.jdoodleService.getToken().subscribe((token) => {
    //   this.currentToken = token;
    //   console.log(this.currentToken);
    // });
  }

  getSelectedTimed(mode: string) {
    let selectedMode = mode.toLocaleLowerCase();
    if (selectedMode == 'timed') {
      return true;
    } else {
      return false;
    }
  }

  handleSubmittedScripts(submittedScripts: ExecuteScript[]) {
    console.log('Test-app', submittedScripts);
    this.submittedScripts = submittedScripts;
    this.showResults = true;
  }
}
