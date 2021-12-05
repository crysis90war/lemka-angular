import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensurationComponent } from './mensuration.component';

describe('MensurationComponent', () => {
  let component: MensurationComponent;
  let fixture: ComponentFixture<MensurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
