import { TestBed } from '@angular/core/testing';

import { AppWriteService } from './app-write.service';

describe('AppWriteService', () => {
  let service: AppWriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppWriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
