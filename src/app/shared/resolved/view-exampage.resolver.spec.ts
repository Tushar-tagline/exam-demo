import { TestBed } from '@angular/core/testing';

import { ViewExampageResolver } from 'src/app/shared/resolved/view-exampage.resolver';

describe('ViewExampageResolver', () => {
  let resolver: ViewExampageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewExampageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
