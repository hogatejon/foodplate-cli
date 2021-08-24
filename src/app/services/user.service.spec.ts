import { TestBed } from '@angular/core/testing';
import { User } from 'src/assets/code-snippets/User';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a user object', () => {
    expect(service.getUser()).toBeInstanceOf(User);
  });
});
