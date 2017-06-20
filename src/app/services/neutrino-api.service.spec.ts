import { TestBed, inject } from '@angular/core/testing';

import { NeutrinoApiService } from './neutrino-api.service';

describe('NeutrinoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeutrinoApiService]
    });
  });

  it('should be created', inject([NeutrinoApiService], (service: NeutrinoApiService) => {
    expect(service).toBeTruthy();
  }));
});
