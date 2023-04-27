import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.scss'],
})
export class TestAppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
