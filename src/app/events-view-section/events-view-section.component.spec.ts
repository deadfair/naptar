import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsViewSectionComponent } from './events-view-section.component';

describe('EventsViewSectionComponent', () => {
  let component: EventsViewSectionComponent;
  let fixture: ComponentFixture<EventsViewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsViewSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsViewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
