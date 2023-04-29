import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemPanelComponent } from './problem-panel/problem-panel.component';
import { IdePanelComponent } from './ide-panel/ide-panel.component';
import { TestLayoutComponent } from './test-layout/test-layout.component';
import { TestAppComponent } from './test-app/test-app.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { TestCasePanelComponent } from './test-case-panel/test-case-panel.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    TestAppComponent,
    ProblemPanelComponent,
    IdePanelComponent,
    TestLayoutComponent,
    ResultPageComponent,
    TestCasePanelComponent,
    TimerComponent,
  ],
  imports: [CommonModule],
})
export class TestAppModule {}
