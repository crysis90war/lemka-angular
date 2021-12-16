import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensurationsUpdateComponent } from './mensurations-update.component';

describe('MensurationsUpdateComponent', () => {
  let component: MensurationsUpdateComponent;
  let fixture: ComponentFixture<MensurationsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensurationsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensurationsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
