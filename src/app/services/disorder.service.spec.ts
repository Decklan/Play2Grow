import { TestBed, inject } from '@angular/core/testing';

import { DisorderService } from './disorder.service';

describe('DisorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisorderService]
    });
  });

  it('should be created', inject([DisorderService], (service: DisorderService) => {
    expect(service).toBeTruthy();
  }));
});
