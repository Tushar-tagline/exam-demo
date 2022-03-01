import { TestBed } from '@angular/core/testing';

import { ExamListResolver } from 'src/app/shared/resolved/exam-list.resolver';

describe('ExamListResolver', () => {
  let resolver: ExamListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExamListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
