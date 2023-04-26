import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { SelectTopicComponent } from './select-topic/select-topic.component';
import { SelectModeComponent } from './select-mode/select-mode.component';

@NgModule({
  declarations: [
    SelectLanguageComponent,
    SelectTopicComponent,
    SelectModeComponent,
  ],
  imports: [CommonModule],
  exports: [SelectLanguageComponent, SelectTopicComponent, SelectModeComponent],
})
export class HomeModule {}
