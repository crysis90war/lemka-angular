import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensurationsCreateComponent } from './mensurations-create.component';

describe('MensurationsCreateComponent', () => {
  let component: MensurationsCreateComponent;
  let fixture: ComponentFixture<MensurationsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensurationsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensurationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
