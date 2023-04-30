import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageAndTopicService } from '../../shared/services/language-and-topic.service';
import { Language } from '../../shared/models/models';

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
    this.lts.getAllLanguages().subscribe((data) => (this.languageData = data));
  }

  handleLanguageSelect(lang: any) {
    this.selectedLanguage = lang;
    this.emitSelectedLanguage.emit(this.selectedLanguage!);
  }
}
