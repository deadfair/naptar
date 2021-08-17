import { Component, Input, OnInit } from '@angular/core';
import { TravelEventInfo } from './../interface/travelEventInfo';
import { addDays, asCleanDays, Calendar, CalendarOptions, DayCellContent, FullCalendarComponent } from '@fullcalendar/angular';
import { TravelPlusEventsInfo } from '../interface/travelPlusEventsInfo';
import { ViewChild } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.scss']
})
export class FullcalendarComponent implements OnInit {
  @Input() selectedView:string="";
  previousSelectedView:string="";
  firstInitView:string="dayGridMonth";
  constructor() { }
  eventwindow:boolean=false;        // eventadatok
  moreEventWindow:boolean=false;    // + felnyílófül
  hiddenSegs:any[]=[];              // rejtett napok
  fullcalendarContainer={
    'fullcalendar-day-view-container':false,
    'fullcalendar-week-view-container':false,
    'fullcalendar-month-view-container':true
  }

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;

  calendarApi!:Calendar;

  selectEvent:TravelEventInfo=new TravelEventInfo();
  moreEventWindowInfo:TravelPlusEventsInfo={jsEvent:null,plusEvents:[]};

  numSequence(n: number): Array<number> {
    return Array(n).fill(1);
  }

  ngOnInit(): void {
    this.previousSelectedView=this.selectedView;
    this.firstInitView=this.getNewViewName(this.selectedView);
  }
  ngAfterViewInit(): void {
    this.calendarApi = this.calendarComponent.getApi();

  }
  ngDoCheck(): void {
    if (this.previousSelectedView!==this.selectedView) {
      if (this.selectedView!=='Year') {
        this.fullcalendarContainer=this.getFullcalendaContainer(this.selectedView);
        this.changeView(this.selectedView);
      }
      this.previousSelectedView=this.selectedView;
    }

  }


  getFullcalendaContainer(view:string):any{
    let result={
      'fullcalendar-day-view-container':false,
      'fullcalendar-week-view-container':false,
      'fullcalendar-month-view-container':false
    }
    switch (view) {
      case 'Day':  result['fullcalendar-day-view-container']=true;
        break;
      case "Week":  result['fullcalendar-week-view-container']=true;
        break;
      case "Month":  result['fullcalendar-month-view-container']=true;
        break;
      default:
        break;
    }
    return result;

  }

  getNewViewName(view:string){

    let result:string='';

    switch (view) {
      case 'Day':  result='timeGridDay';
        break;
      case "Week":  result='timeGridWeek';
        break;
      case "Month":  result='dayGridMonth';
        break;
      default:
        break;
    }
    return result;
  }

  changeView(view:string){
    const viewName=this.getNewViewName(view);
    const calendarApi = this.calendarComponent.getApi();
    if (viewName==='dayGridMonth') {
      calendarApi.setOption('contentHeight', 807);
    } else {
      calendarApi.setOption('contentHeight', 1302);
    }
    calendarApi.changeView(viewName);
    // mert nem akart így => calendarApi.updateSize(); működni
    setTimeout(()=>calendarApi.updateSize(), 0.00000000000000000001);
  }


  backDay(){
    this.calendarApi.prev()
  }
  nextDay() {
      this.calendarApi.next()
  }

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
    initialView: this.firstInitView,
    eventDidMount: function(info) {
      var node = document.createElement("div");
      node.className="event-text-container"
      node.innerHTML=`<mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">close_24px</mat-icon>
                      <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">close_24px</mat-icon>
      <div class="event-text">${info.event.extendedProps.eventText}</div>`    // szülő szélessége - x
      // az event kerüljön bele
      // klasszz adódjon hozzá
      info.el.children[0].appendChild(node)
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
    contentHeight: 1302, // (144+14)*6 // ez csak a táblázat magassága
    aspectRatio: 1, // a magasság/szélesség arány contentHeight/contentWidth
    events: [
      { id:"01",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"02",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"03",title: 'Evensd', date: '2021-08-01' }, // eventek
      { id:"04",title: 'Evenasdt', date: '2021-08-01', backgroundColor:'green' }, // eventek
      { id:"05",title: 'Eveffdnt', date: '2021-08-01' }, // eventek
      { id:"06",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"07",title: 'Eventttt', backgroundColor:'green', start: '2021-08-16T14:30:00' ,end:'2021-08-16T17:30:00',
      extendedProps: {eventText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies quam et fringilla convallis mauris. Fermentum tempor nunc, faucibus adipiscing gravida suspendisse. Iaculis in sit a lectus dolor massa pretium ut. Orci blandit nunc ut cum felis arcu. Dictum aliquet quisque imperdiet purus, vitae accumsan posuere amet.'}}, // eventek
      { id:"08",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"09",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"10",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"11",title: 'Event', date: '2021-08-01' }, // eventek
      { id:"12",title: 'Event 2', date: '2021-08-02' },
      { id:"13",title: 'Eventttt', backgroundColor:'green', start: '2021-08-16T10:30:00' ,end:'2021-08-16T12:30:00',
      extendedProps: {eventText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies quam et fringilla convallis mauris. Fermentum tempor nunc, faucibus adipiscing gravida suspendisse. Iaculis in sit a lectus dolor massa pretium ut. Orci blandit nunc ut cum felis arcu. Dictum aliquet quisque imperdiet purus, vitae accumsan posuere amet.'}}, // eventek
    ]
  };

}
