import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeTimeComponent } from './age-time.component';

describe('AgeTimeComponent', () => {
  let component: AgeTimeComponent;
  let fixture: ComponentFixture<AgeTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeTimeComponent]
    });
    fixture = TestBed.createComponent(AgeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
