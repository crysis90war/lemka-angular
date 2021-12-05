import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourRemboursementComponent } from './retour-remboursement.component';

describe('RetourRemboursementComponent', () => {
  let component: RetourRemboursementComponent;
  let fixture: ComponentFixture<RetourRemboursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourRemboursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourRemboursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
