import { TestBed } from '@angular/core/testing';

import { UserserviesService } from 'src/app/shared/servies/userservies.service';

describe('UserserviesService', () => {
  let service: UserserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
