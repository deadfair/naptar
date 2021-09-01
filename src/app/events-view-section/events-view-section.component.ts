import { Component, Input, OnInit } from '@angular/core';
import { Calendar} from '@fullcalendar/angular';

@Component({
  selector: 'app-events-view-section',
  templateUrl: './events-view-section.component.html',
  styleUrls: ['./events-view-section.component.scss']
})
export class EventsViewSectionComponent implements OnInit {
  @Input() selectedDate:Date|null=null;
  @Input() calendarApi!:Calendar;
  constructor() { }
  ngOnInit(): void {}
}
