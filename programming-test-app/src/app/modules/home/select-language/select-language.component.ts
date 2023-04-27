import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageAndTopicService } from '../../shared/services/language-and-topic.service';
import { Language } from '../../shared/models/language';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements OnInit {
  @Output() emitSelectedLanguage: EventEmitter<Language> = new EventEmitter();

  languageData: Language[] = [];
  selectedLanguage: Language | null = null;

  constructor(private lts: LanguageAndTopicService) {}

  ngOnInit(): void {
    this.lts
      .getAllLanguages()
      .then((obs) => obs.subscribe((data) => (this.languageData = data)));
  }

  handleLanguageSelect(lang: any) {
    // console.log(lang);
    this.selectedLanguage = lang;
    this.emitSelectedLanguage.emit(this.selectedLanguage!);
  }
}
