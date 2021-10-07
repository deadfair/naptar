import { Direction } from './../interface/direction';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TravelEventInfo } from './../interface/travelEventInfo';
import { addDays, asCleanDays, Calendar, CalendarOptions, DayCellContent, FullCalendarComponent } from '@fullcalendar/angular';
import { TravelPlusEventsInfo } from '../interface/travelPlusEventsInfo';
import { ViewChild } from '@angular/core';
import { style } from '@angular/animations';
import { EventServiceService } from '../services/event-service.service';
import { FullCalendarViewController } from '../interface/fullCalendarViewController';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';
import { getSelectedViewName } from '../main-calendar/state/main-calendar.selector';
@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.scss']
})
export class FullcalendarComponent implements OnInit {
  @Output() eventsOut:EventEmitter<any[]>=new EventEmitter();

  constructor(private eventService:EventServiceService,private store:Store<AppState>) { }
  firstInitView:string="dayGridMonth";

  stepperActive:boolean=false;
  fullCalendarViewController!: FullCalendarViewController;

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  calendarApi!:Calendar;
  selectedViewName$!:Observable<string>;

  selectEvent!:TravelEventInfo;
  moreEventWindowInfo:TravelPlusEventsInfo={jsEvent:null,plusEvents:[]};
  hiddenSegs:any[]=[];

  ngOnInit(): void {
    this.selectedViewName$=this.store.select(getSelectedViewName)
    this.selectedViewName$.forEach((value)=>{
    this.fullCalendarViewController=new FullCalendarViewController(value);
    if (this.calendarApi!==undefined && value!=="Year") {
      this.changeView();
    }
    })
    this.eventsOut.emit(this.eventService.getAllEvents())
  }

  ngAfterViewInit(): void {
    this.calendarApi = this.calendarComponent.getApi();
  }

  numSequence(n: number): Array<number> {
    return Array(n).fill(1);
  }

  changeView(){
    if (this.fullCalendarViewController.fullcalendarViewName==='dayGridMonth') {
      this.calendarApi.setOption('contentHeight', 807);
    } else {
      this.calendarApi.setOption('contentHeight', 1302);
    }
    this.calendarApi.changeView(this.fullCalendarViewController.fullcalendarViewName);
    // mert nem akart így => calendarApi.updateSize(); működni
    setTimeout(()=>this.calendarApi.updateSize(), 0);
  }

  backDay(){
    this.calendarApi.prev()
  }
  nextDay() {
    this.calendarApi.next()
  }


  closeDeleteWindow(id:string|null){
    this.fullCalendarViewController.eventwindow=false;
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
    this.fullCalendarViewController.eventwindow=true;
  }


  calendarOptions: CalendarOptions = {

    headerToolbar:{
      left:'title',
      center:'',
      right:""
    },
    eventDisplay:"block",
    views: {
      dayGrid: {
        // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
        displayEventTime:false,
        dayCellDidMount:(info)=> {
          let node = document.createElement("button");
          node.className="event-plus-icon mat-focus-indicator mat-icon-button add_circle mat-button-base"
          node.innerHTML=`
          <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color"
                aria-hidden="true" data-mat-icon-type="font">add_circle</mat-icon>
          `
          node.setAttribute('value',info.date.toString())
          node.onclick=(e:any)=> {
            console.log(new Date(e.target.value),this.stepperActive);
            this.stepperActive=true;
            console.log(this.stepperActive)
          }
          info.el.children[0].children[0].appendChild(node)
        }
      },
      timeGrid: {
        // options apply to timeGridWeek and timeGridDay views
        displayEventTime:true, // azért kell mert ha van akkor a info.el.children[0].children[0].children[0] elemnek az innerHTMLjét kell csak átírni
        eventDidMount: function(info) {
          let node = document.createElement("div");
          node.className="event-text-container"
          node.innerHTML=`<mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">close_24px</mat-icon>
                          <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">close_24px</mat-icon>
          <div class="event-text">${info.event.extendedProps.eventText}</div>`
          info.el.children[0].appendChild(node);

          let minuteDiference=Math.round((Number(info.event.end)-Number(info.event.start))/1000/60);
          info.el.children[0].children[0].children[0].innerHTML=minuteDiference+" min";
        },
      },
      week: {
        // options apply to dayGridWeek and timeGridWeek views
      },
      day: {
        // options apply to dayGridDay and timeGridDay views
      }
    },
    initialView: this.firstInitView,

    editable: true,
    moreLinkClick:(info)=>{
      this.fullCalendarViewController.eventwindow=false;
      this.fullCalendarViewController.moreEventWindow=true;
      this.moreEventWindowInfo={
          jsEvent:info.jsEvent,
          plusEvents:info.hiddenSegs
      }
    },
    eventClick: (info) =>{
      this.selectEvent= new TravelEventInfo(Direction.Up,info);
      this.fullCalendarViewController.moreEventWindow=false;
      this.fullCalendarViewController.eventwindow=true;
    },
    eventColor:'#006633',
    firstDay:1,           // Monday as first day of week
    weekends: true,       // a hétvégét nem mutatja
    dayMaxEvents:true,
    //contentHeight: 1302,  // ez CSAK a táblázat magassága
    aspectRatio: 1,       // a magasság/szélesség arány contentHeight/contentWidth
    events: this.eventService.getAllEvents()
  };

}
