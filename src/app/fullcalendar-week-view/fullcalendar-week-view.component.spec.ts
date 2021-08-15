import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalendarWeekViewComponent } from './fullcalendar-week-view.component';

describe('FullcalendarWeekViewComponent', () => {
  let component: FullcalendarWeekViewComponent;
  let fixture: ComponentFixture<FullcalendarWeekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcalendarWeekViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalendarWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
