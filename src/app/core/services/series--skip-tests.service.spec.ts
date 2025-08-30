import { TestBed } from '@angular/core/testing';

import { SeriesSkipTestsService } from './series--skip-tests.service';

describe('SeriesSkipTestsService', () => {
  let service: SeriesSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
