import { TestBed, inject } from '@angular/core/testing';

import { QuestionsServiceService } from './questions-service.service';

describe('QuestionsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsServiceService]
    });
  });

  it('should be created', inject([QuestionsServiceService], (service: QuestionsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
