import { eventWindowRenderPointChange } from './../main-calendar/state/main-calendar.actions';
import { DirectionModel } from './../models/directionModel';
import {  initialState } from './../main-calendar/state/main-calendar.state';
import { getEventWindow, getMoreEventWindow, getStepperWindow } from './../main-calendar/state/main-calendar.selector';
import { Direction } from './../interface/direction';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TravelEventInfo } from './../interface/travelEventInfo';
import { Calendar, CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { ViewChild } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';
import { FullCalendarViewController } from '../interface/fullCalendarViewController';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable, pipe } from 'rxjs';
import { getSelectedViewName } from '../main-calendar/state/main-calendar.selector';
import { eventWindowChange, moreEventWindowChange, moreEventWindowRenderPointChange, stepperWindowChange } from '../main-calendar/state/main-calendar.actions';
import { first, take } from 'rxjs/operators';
import { RenderPointModel } from '../models/renderPointModel';
import { MoreEventsModel } from '../models/moreEventsModel';
import { EventModel } from '../models/eventModel';
@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.scss']
})
export class FullcalendarComponent implements OnInit {
  @Output() eventsOut:EventEmitter<any[]>=new EventEmitter();


  constructor(private eventService:EventServiceService,private store:Store<AppState>) {}

  fullCalendarViewController: FullCalendarViewController= new FullCalendarViewController(initialState.selectedViewName);

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  calendarApi!:Calendar;

  selectedViewName$!:Observable<string>;
  eventWindow$!:Observable<boolean>;
  moreEventWindow$!:Observable<boolean>;
  stepperWindow$!:Observable<boolean>;

  selectEvent!:EventModel;
  moreEventsModel:MoreEventsModel={moreEvents:[]};

  ngOnInit(): void {
    this.eventWindow$=this.store.select(getEventWindow)
    this.moreEventWindow$=this.store.select(getMoreEventWindow)
    this.selectedViewName$=this.store.select(getSelectedViewName)
    this.stepperWindow$=this.store.select(getStepperWindow)

    this.selectedViewName$.forEach((value)=>{
    this.fullCalendarViewController=new FullCalendarViewController(value);
    if (this.calendarApi!==undefined && value!=="Year") {
      this.changeView();
    }})
    this.eventsOut.emit(this.eventService.getAllEvents());
  }

  ngAfterViewInit(): void {
    this.calendarApi = this.calendarComponent.getApi();
  }

  numSequence(n: number): Array<number> {return Array(n).fill(1)}

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

  onChangeMoreEventWindow(value:boolean){
    this.store.dispatch(moreEventWindowChange({moreEventWindow:value}))
  }
  onChangeEventWindow(value:boolean){
    this.store.dispatch(eventWindowChange({eventWindow:value}))
  }


  onCloseDeleteWindow(id:string|null){
    this.onChangeEventWindow(false)
    let newhiddenEvents:any[]=[];
    if (id!==null) {
      for (let index = 0,j=0; index < this.moreEventsModel.moreEvents.length ; index++,j++) {
        if (this.moreEventsModel.moreEvents[index].event._def.publicId!==id) {
          newhiddenEvents[j]=this.moreEventsModel.moreEvents[index];
        }else{
          j--;
        }
      }
    }
    this.moreEventsModel.moreEvents=newhiddenEvents;
  }

  eventInfoFromMoreEventWindow(selectedEventFromMoreEventWindow:EventModel){
    this.selectEvent=selectedEventFromMoreEventWindow;
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
        displayEventTime:false,
        dayCellDidMount:(info)=> {
          let node = document.createElement("button");
          node.className="event-plus-icon mat-focus-indicator mat-icon-button add_circle mat-button-base"
          node.innerHTML=`
          <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color"
                aria-hidden="true" data-mat-icon-type="font">add_circle</mat-icon>`
          node.setAttribute('value',info.date.toString())
          node.onclick=()=> {
            this.store.dispatch(stepperWindowChange({stepperWindow:true}))
          }
          info.el.children[0].children[0].appendChild(node)
        }
      },
      timeGrid: {
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
      week: {// options apply to dayGridWeek and timeGridWeek views
      },
      day: {// options apply to dayGridDay and timeGridDay views
      }
    },
    initialView: this.fullCalendarViewController.fullcalendarViewName,
    editable: true,
    moreLinkClick:(info)=>{
      this.moreEventsModel={moreEvents:info.hiddenSegs}
      this.store.dispatch(moreEventWindowRenderPointChange({moreEventWindowRenderPoint:new RenderPointModel(info.jsEvent)}))
      this.onChangeEventWindow(false);
      this.onChangeMoreEventWindow(true);
    },
    eventClick: (info) =>{
      this.selectEvent= new EventModel(DirectionModel.Up,info);
      this.store.dispatch(eventWindowRenderPointChange({eventWindowRenderPoint:new RenderPointModel(info.jsEvent)}))
      console.log(this.selectEvent)
      this.onChangeEventWindow(true);
      this.onChangeMoreEventWindow(false);
    },
    eventColor:'#006633',
    firstDay:1,           // Monday as first day of week
    weekends: true,       // a hétvégét nem mutatja
    dayMaxEvents:true,
    contentHeight: this.fullCalendarViewController.fullcalendarViewName!=="dayGridMonth"?1302:807,  // ez CSAK a táblázat magassága
    aspectRatio: 1,         // a magasság/szélesség arány contentHeight/contentWidth
    events: this.eventService.getAllEvents()
  };

}

