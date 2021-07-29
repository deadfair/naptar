import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMultipleViewComponent } from './datepicker-multiple-view.component';

describe('DatepickerMultipleViewComponent', () => {
  let component: DatepickerMultipleViewComponent;
  let fixture: ComponentFixture<DatepickerMultipleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerMultipleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMultipleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
