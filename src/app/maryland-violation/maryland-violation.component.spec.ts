import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarylandViolationComponent } from './maryland-violation.component';

describe('MarylandViolationComponent', () => {
  let component: MarylandViolationComponent;
  let fixture: ComponentFixture<MarylandViolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarylandViolationComponent]
    });
    fixture = TestBed.createComponent(MarylandViolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
