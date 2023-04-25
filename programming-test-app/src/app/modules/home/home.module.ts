import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { SelectTopicComponent } from './select-topic/select-topic.component';

@NgModule({
  declarations: [SelectLanguageComponent, SelectTopicComponent],
  imports: [CommonModule],
  exports: [SelectLanguageComponent, SelectTopicComponent],
})
export class HomeModule {}
