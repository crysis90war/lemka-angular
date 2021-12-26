import { TestBed } from '@angular/core/testing';

import { DemandeDevisResolver } from './demande-devis.resolver';

describe('DemandeDevisResolver', () => {
  let resolver: DemandeDevisResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DemandeDevisResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
