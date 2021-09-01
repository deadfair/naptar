import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEventsByDayComponent } from './get-events-by-day.component';

describe('GetEventsByDayComponent', () => {
  let component: GetEventsByDayComponent;
  let fixture: ComponentFixture<GetEventsByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEventsByDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEventsByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
