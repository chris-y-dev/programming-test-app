import { Component, Input, OnInit } from '@angular/core';
import { Language } from '../../shared/models/language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-topic',
  templateUrl: './select-topic.component.html',
  styleUrls: ['./select-topic.component.scss'],
})
export class SelectTopicComponent implements OnInit {
  @Input() selectedLanguage: Language | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // TODO: Use pipe + filter to sort through topics

  handleTopicSelect(event: any) {
    console.log(event);
    this.router.navigate(['/test']);
  }
}
