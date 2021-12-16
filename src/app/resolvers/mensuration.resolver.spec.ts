import { TestBed } from '@angular/core/testing';

import { MensurationResolver } from './mensuration.resolver';

describe('MensurationResolver', () => {
  let resolver: MensurationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MensurationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
