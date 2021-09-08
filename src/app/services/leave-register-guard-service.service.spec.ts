import { TestBed } from '@angular/core/testing';

import { LeaveRegisterGuardServiceService } from './leave-register-guard-service.service';

describe('LeaveRegisterGuardServiceService', () => {
  let service: LeaveRegisterGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveRegisterGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
