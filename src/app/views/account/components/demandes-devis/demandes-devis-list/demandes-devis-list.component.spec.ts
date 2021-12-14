import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesDevisListComponent } from './demandes-devis-list.component';

describe('DemandesDevisListComponent', () => {
  let component: DemandesDevisListComponent;
  let fixture: ComponentFixture<DemandesDevisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesDevisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesDevisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
