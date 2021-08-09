import { TravelEventInfo } from './../interface/travelEventInfo';
import { Component, OnInit } from '@angular/core';
import { addDays, asCleanDays, Calendar, CalendarOptions, DayCellContent } from '@fullcalendar/angular';
import { TravelPlusEventsInfo } from '../interface/travelPlusEventsInfo';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor() { }
  eventwindow:boolean=false;        // eventadatok
  moreEventWindow:boolean=false;    // + felnyílófül
  hiddenSegs:any[]=[];              // rejtett napok

  selectEvent:TravelEventInfo=new TravelEventInfo();
  moreEventWindowInfo:TravelPlusEventsInfo={jsEvent:null,plusEvents:[]};


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
      left:'title',
      center:'',
      right:""
    },
    initialView: 'dayGridMonth',
    /* dayCellContent:{
      html:"<button mat-button>text</button>" + day ,
    },*/
    //locale:'hu',
    // titleFormat:{ weekday: 'long' },
    // dateClick: this.handleDateClick.bind(this),
    //height:1100, // a calendar teljes magasságsa mindennel eggyütt pxbe
    views:{
      dayGridMonth:{/*
        editable: false,
        dayCellDidMount : function(arg){
          let button:string="<button mat-button>text</button>";
        console.log(arg);
        if (!arg.el.innerHTML.endsWith(button,arg.el.innerHTML.length)) {
          console.log(arg.el.innerHTML);
          console.log(arg.el.innerHTML.length);
          arg.el.innerHTML +=button;
        }else{
          console.log("else")
        }
        //arg.el.innerText+=arg.dayNumberText
        },*/
      }/*,
      dayGrid: {
      //columnHeader:false,  // nem működik
        //columnHeaderFormat: "dddd"
      // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
      },
      timeGrid: {
        // options apply to timeGridWeek and timeGridDay views
      },
      week: {
        // options apply to dayGridWeek and timeGridWeek views
      },
      day: {
        // options apply to dayGridDay and timeGridDay views
      }*/
    },
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
    contentHeight: 807, // (144+14)*6 // ez csak a táblázat magassága
    aspectRatio: 1, // a magasság/szélesség arány contentHeight/contentWidth
    events: [
      { id:"01",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"02",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"03",title: 'Evensd', date: '2021-08-01' }, // eventek
      { id:"04",title: 'Evenasdt', date: '2021-08-01', backgroundColor:'green' }, // eventek
      { id:"05",title: 'Eveffdnt', date: '2021-08-01' }, // eventek
      { id:"06",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"07",title: 'Eventttt', start: '2021-08-01' ,end:'2021-08-10'}, // eventek
      { id:"08",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"09",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"10",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"11",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"12",title: 'Event 2', date: '2021-08-02' }
    ]
  };







  /*
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr) // arg.dateStr az adott nap
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  } // hétvége elrejtése*/
}


