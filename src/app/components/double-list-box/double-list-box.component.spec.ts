import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleListBoxComponent } from './double-list-box.component';

describe('DoubleListBoxComponent', () => {
  let component: DoubleListBoxComponent;
  let fixture: ComponentFixture<DoubleListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleListBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
