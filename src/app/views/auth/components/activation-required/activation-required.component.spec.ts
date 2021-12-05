import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationRequiredComponent } from './activation-required.component';

describe('ActivationRequiredComponent', () => {
  let component: ActivationRequiredComponent;
  let fixture: ComponentFixture<ActivationRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
