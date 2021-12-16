import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesDevisCreateComponent } from './demandes-devis-create.component';

describe('DemandesDevisCreateComponent', () => {
  let component: DemandesDevisCreateComponent;
  let fixture: ComponentFixture<DemandesDevisCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesDevisCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesDevisCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
