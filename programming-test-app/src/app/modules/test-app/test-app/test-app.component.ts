import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JdoodleService } from '../../shared/services/jdoodle.service';
import { Observable } from 'rxjs';
import { ExecuteScript } from '../../shared/models/models';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.scss'],
})
export class TestAppComponent implements OnInit {
  @Input() submittedScripts: ExecuteScript[] = [];
  currentToken: any = undefined;
  showResults = false;
  executionResponses$: any[] | null = [];

  constructor(
    private router: Router,
    private _jdoodleService: JdoodleService
  ) {}

  ngOnInit(): void {
    // this.jdoodleService.getToken().subscribe((token) => {
    //   this.currentToken = token;
    //   console.log(this.currentToken);
    // });
  }

  handleSubmittedScripts(submittedScripts: ExecuteScript[]) {
    console.log('Test-app', submittedScripts);
    this.submittedScripts = submittedScripts;
    this.showResults = true;
  }
}
