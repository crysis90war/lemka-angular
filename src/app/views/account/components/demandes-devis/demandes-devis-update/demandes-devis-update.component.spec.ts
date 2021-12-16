import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesDevisUpdateComponent } from './demandes-devis-update.component';

describe('DemandesDevisUpdateComponent', () => {
  let component: DemandesDevisUpdateComponent;
  let fixture: ComponentFixture<DemandesDevisUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesDevisUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesDevisUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
