import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language, Topic } from '../../shared/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-topic',
  templateUrl: './select-topic.component.html',
  styleUrls: ['./select-topic.component.scss'],
})
export class SelectTopicComponent implements OnInit {
  @Input() selectedLanguage: Language | null = null;
  @Output() emitSelectedTopic: EventEmitter<Topic> = new EventEmitter();

  selectedTopic: Topic | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // TODO: Use pipe + filter to sort through topics

  handleTopicSelect(topic: Topic) {
    console.log(topic);
    this.selectedTopic = topic;
    // this.router.navigate(['/test']);
    this.emitSelectedTopic.emit(this.selectedTopic);
  }
}
