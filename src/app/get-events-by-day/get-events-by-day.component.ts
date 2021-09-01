import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import {PeopleEvent} from '../interface/event'
import { EventServiceService } from '../services/event-service.service';
import { addDays, asCleanDays, Calendar, CalendarOptions, DayCellContent, FullCalendarComponent } from '@fullcalendar/angular';


@Component({
  selector: 'app-get-events-by-day',
  templateUrl: './get-events-by-day.component.html',
  styleUrls: ['./get-events-by-day.component.scss']
})
export class GetEventsByDayComponent implements OnInit {

  @Input() selectedDate:Date|null=null;
  @Input() events:any[]=[];


  currentDate=new Date();
  selectEvents:any[]=[];

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {}

  ngOnChanges(): void {
      this.getEventsBySelectedDay();
  }
  getEventsBySelectedDay(){
    this.selectEvents=[];
    for (const event of this.events) {
      if (this.datepipe.transform(event.date, 'yyyy-MM-dd')===this.datepipe.transform(this.selectedDate, 'yyyy-MM-dd')) {
        this.selectEvents.push(event);
      }
    }
  }




}
