import { Component, OnInit } from '@angular/core';
import { TravelEventInfo } from './../interface/travelEventInfo';
import { addDays, asCleanDays, Calendar, CalendarOptions, DayCellContent } from '@fullcalendar/angular';
import { TravelPlusEventsInfo } from '../interface/travelPlusEventsInfo';

@Component({
  selector: 'app-fullcalendar-week-view',
  templateUrl: './fullcalendar-week-view.component.html',
  styleUrls: ['./fullcalendar-week-view.component.scss']
})
export class FullcalendarWeekViewComponent implements OnInit {

  constructor() { }
  eventwindow:boolean=false;        // eventadatok
  moreEventWindow:boolean=false;    // + felnyílófül
  hiddenSegs:any[]=[];              // rejtett napok

  selectEvent:TravelEventInfo=new TravelEventInfo();
  moreEventWindowInfo:TravelPlusEventsInfo={jsEvent:null,plusEvents:[]};

  numSequence(n: number): Array<number> {
    return Array(n).fill(1);
  }
  ngOnInit(): void {}

  closeDeleteWindow(id:string|null){
    this.eventwindow=false;
    let newhiddenEvents:any[]=[];
    if (id!==null) {
      for (let index = 0,j=0; index < this.moreEventWindowInfo.plusEvents.length ; index++,j++) {
        if (this.moreEventWindowInfo.plusEvents[index].event._def.publicId!==id) {
          newhiddenEvents[j]=this.moreEventWindowInfo.plusEvents[index];
        }else{
          j--;
        }
      }
    }
    this.moreEventWindowInfo.plusEvents=newhiddenEvents;
  }

  eventInfoFromMoreEventWindow(selectedEventFromMoreEventWindow:TravelEventInfo){
    this.selectEvent=selectedEventFromMoreEventWindow;
    this.eventwindow=true;
  }

  calendarOptions: CalendarOptions = {
    headerToolbar:{
      left:'',
      center:'',
      right:""
    },
    initialView: 'timeGridWeek',
    editable: true,
    moreLinkClick:(info)=>{
      this.eventwindow=false;
      this.moreEventWindow=true;
      this.moreEventWindowInfo={
          jsEvent:info.jsEvent,
          plusEvents:info.hiddenSegs
      }
    },
    eventClick: (info) =>{
      this.moreEventWindow=false;
      this.eventwindow=true;
      this.selectEvent= new TravelEventInfo(info);
    },
    eventColor:'#006633',
    firstDay:1, // Monday as first day of week
    weekends: true, // a hétvégét nem mutatja
    dayMaxEvents:true,
    contentHeight: 1302, // (144+14)*6 // ez csak a táblázat magassága
    aspectRatio: 1, // a magasság/szélesség arány contentHeight/contentWidth
    events: [
      { id:"01",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"02",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"03",title: 'Evensd', date: '2021-08-01' }, // eventek
      { id:"04",title: 'Evenasdt', date: '2021-08-01', backgroundColor:'green' }, // eventek
      { id:"05",title: 'Eveffdnt', date: '2021-08-01' }, // eventek
      { id:"06",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"07",title: 'Eventttt', start: '2021-08-14T14:30:00' ,end:'2021-08-14T17:30:00'}, // eventek
      { id:"08",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"09",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"10",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"11",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"12",title: 'Event 2', date: '2021-08-02' }
    ]
  };
}
