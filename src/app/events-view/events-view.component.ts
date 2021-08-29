import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import {PeopleEvent} from '../interface/event'
import {People} from '../interface/people'
import { EventServiceService } from '../services/event-service.service';
@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.scss']
})
export class EventsViewComponent implements OnInit,OnChanges {
  @Input() selectedDate:Date|null=null;
  aktevent={};
  currentDate=new Date();
  allEvents:PeopleEvent[]=[];
  selectEvents:PeopleEvent[]=[];

  constructor(public datepipe: DatePipe,private eventService:EventServiceService) { }
  ngOnInit(): void {
    this.allEvents=this.eventService.getAllEvents();
  }
  ngOnChanges(): void {
    this.getActEvent();
  }
  getActEvent(){
    this.selectEvents=[];
    for (const event of this.allEvents) {
      if (event.date===this.datepipe.transform(this.selectedDate, 'yyyy-MM-dd')) {
        this.selectEvents.push(event);
      }
    }
  }



}
