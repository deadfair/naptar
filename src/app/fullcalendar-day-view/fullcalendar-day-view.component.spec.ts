import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalendarDayViewComponent } from './fullcalendar-day-view.component';

describe('FullcalendarDayViewComponent', () => {
  let component: FullcalendarDayViewComponent;
  let fixture: ComponentFixture<FullcalendarDayViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcalendarDayViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalendarDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
