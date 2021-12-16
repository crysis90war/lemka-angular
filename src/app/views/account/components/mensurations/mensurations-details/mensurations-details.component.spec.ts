import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensurationsDetailsComponent } from './mensurations-details.component';

describe('MensurationsDetailsComponent', () => {
  let component: MensurationsDetailsComponent;
  let fixture: ComponentFixture<MensurationsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensurationsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensurationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
