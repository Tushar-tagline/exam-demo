import { TestBed } from '@angular/core/testing';

import { ProfileResolver } from 'src/app/shared/resolved/profile.resolver';

describe('ProfileResolver', () => {
  let resolver: ProfileResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
