import { TestBed } from '@angular/core/testing';

import { DefaultScriptService } from './default-script.service';

describe('DefaultScriptService', () => {
  let service: DefaultScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
