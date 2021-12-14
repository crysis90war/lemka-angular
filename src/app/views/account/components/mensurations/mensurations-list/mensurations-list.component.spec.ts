import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensurationsListComponent } from './mensurations-list.component';

describe('MensurationsListComponent', () => {
  let component: MensurationsListComponent;
  let fixture: ComponentFixture<MensurationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensurationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensurationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
