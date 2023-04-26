import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemPanelComponent } from './problem-panel/problem-panel.component';
import { IdePanelComponent } from './ide-panel/ide-panel.component';
import { TestLayoutComponent } from './test-layout/test-layout.component';
import { TestAppComponent } from './test-app/test-app.component';

@NgModule({
  declarations: [
    TestAppComponent,
    ProblemPanelComponent,
    IdePanelComponent,
    TestLayoutComponent,
  ],
  imports: [CommonModule],
})
export class TestAppModule {}
