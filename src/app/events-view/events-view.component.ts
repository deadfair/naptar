import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import {PeopleEvent} from '../interface/event'
import {People} from '../interface/people'
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

  constructor(public datepipe: DatePipe) { }
  ngOnInit(): void {
    this.allEvents=this.getAllEvents();
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

  getAllEvents():PeopleEvent[]{
    return [
      {
        date:"2020-01-01",
        name:"béla",
        start:"8:30",
        end:"11:00 AM",
        peoples:[],
        text:"üres"
      },
      {
        date:"2020-03-21",
        name:"kiki",
        start:"8:30",
        end:"11:00 AM",
        peoples:[
          {
          peopleId:"01",
          peopleUrl:"01.png"
          },
          {
          peopleId:"02",
          peopleUrl:"02.png"
          }
        ],
        text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }]
  }

}
