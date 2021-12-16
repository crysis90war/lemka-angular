import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesureFormInputComponent } from './mesure-form-input.component';

describe('MesureFormInputComponent', () => {
  let component: MesureFormInputComponent;
  let fixture: ComponentFixture<MesureFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesureFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesureFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
