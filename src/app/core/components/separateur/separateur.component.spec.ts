import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateurComponent } from './separateur.component';

describe('SeparateurComponent', () => {
  let component: SeparateurComponent;
  let fixture: ComponentFixture<SeparateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
