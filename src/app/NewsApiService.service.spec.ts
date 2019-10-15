/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsApiServiceService } from './NewsApiService.service';

describe('Service: NewsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsApiServiceService]
    });
  });

  it('should ...', inject([NewsApiServiceService], (service: NewsApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
