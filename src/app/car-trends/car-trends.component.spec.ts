import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTrendsComponent } from './car-trends.component';

describe('CarTrendsComponent', () => {
  let component: CarTrendsComponent;
  let fixture: ComponentFixture<CarTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarTrendsComponent]
    });
    fixture = TestBed.createComponent(CarTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
