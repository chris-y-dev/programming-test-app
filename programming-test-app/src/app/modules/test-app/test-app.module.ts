import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemPanelComponent } from './problem-panel/problem-panel.component';
import { IdePanelComponent } from './ide-panel/ide-panel.component';



@NgModule({
  declarations: [
    ProblemPanelComponent,
    IdePanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestAppModule { }
