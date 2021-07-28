import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerAllMonthComponent } from './datepicker-all-month.component';

describe('DatepickerAllMonthComponent', () => {
  let component: DatepickerAllMonthComponent;
  let fixture: ComponentFixture<DatepickerAllMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerAllMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerAllMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
