import { TestBed } from '@angular/core/testing';

import { StudentlistResolver } from 'src/app/shared/resolved/studentlist-resolver.service';

describe('StudentlistResolver', () => {
  let resolver: StudentlistResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentlistResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
