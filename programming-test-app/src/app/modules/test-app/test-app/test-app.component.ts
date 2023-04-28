import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JdoodleService } from '../../shared/services/jdoodle.service';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.scss'],
})
export class TestAppComponent implements OnInit {
  currentToken: any = undefined;

  constructor(private router: Router, private jdoodleService: JdoodleService) {}

  ngOnInit(): void {
    // this.jdoodleService.getToken().subscribe((token) => {
    //   this.currentToken = token;
    //   console.log(this.currentToken);
    // });
  }
}
