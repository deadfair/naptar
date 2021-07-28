import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMonthHeaderComponent } from './datepicker-month-header.component';

describe('DatepickerMonthHeaderComponent', () => {
  let component: DatepickerMonthHeaderComponent;
  let fixture: ComponentFixture<DatepickerMonthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerMonthHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMonthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
