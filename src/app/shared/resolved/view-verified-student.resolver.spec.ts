import { TestBed } from '@angular/core/testing';

import { ViewVerifiedStudentResolver } from 'src/app/shared/resolved/view-verified-student.resolver';

describe('ViewVerifiedStudentResolver', () => {
  let resolver: ViewVerifiedStudentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewVerifiedStudentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
