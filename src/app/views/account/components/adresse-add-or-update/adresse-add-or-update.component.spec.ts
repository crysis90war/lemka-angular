import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseAddOrUpdateComponent } from './adresse-add-or-update.component';

describe('AdresseAddOrUpdateComponent', () => {
  let component: AdresseAddOrUpdateComponent;
  let fixture: ComponentFixture<AdresseAddOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresseAddOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseAddOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
