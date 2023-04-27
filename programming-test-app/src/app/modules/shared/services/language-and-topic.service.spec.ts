import { TestBed } from '@angular/core/testing';

import { LanguageAndTopicService } from './language-and-topic.service';

describe('LanguageAndTopicService', () => {
  let service: LanguageAndTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageAndTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
