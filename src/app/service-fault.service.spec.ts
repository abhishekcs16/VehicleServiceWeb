import { TestBed } from '@angular/core/testing';

import { ServiceFaultService } from './service-fault.service';

describe('ServiceFaultService', () => {
  let service: ServiceFaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
