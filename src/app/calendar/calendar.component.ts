import { Component, OnInit } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  calendarOptions: CalendarOptions = {
    headerToolbar:{
      left:'prev,next today',
      center:'title',
      right:"dayGridMonth,dayGridWeek,dayGridDay"
    },

    views:{
      dayGrid: {
      //columnHeader:false,  // nem működik
        columnHeaderFormat: "dddd"
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
      }
    },




    //locale:'hu',
    initialView: 'dayGridMonth',


    // titleFormat:{ weekday: 'long' },
    firstDay:1, // Monday as first day of week
    weekends: false, // a hétvégét nem mutatja
    dateClick: this.handleDateClick.bind(this),
    dayMaxEvents:true,
    //height:1100, // a calendar teljes magasságsa mindennel eggyütt pxbe
    //contentHeight: 600, // ez csak a táblázat magassága
    aspectRatio: 1, // a magasság/szélesség arány contentHeight/contentWidth
    events: [
      { title: 'Event 1', date: '2021-07-01' }, // eventek
      { title: 'event 1', date: '2021-07-01' }, // eventek
      { title: 'event 1', date: '2021-07-01' }, // eventek
      { title: 'event 1', date: '2021-07-01' }, // eventek
      { title: 'event 1', date: '2021-07-01' }, // eventek
      { title: 'event 1', date: '2021-07-01' }, // eventek
      { title: 'event 1', date: '2021-07-01' }, // eventek
      { title: 'event 1', date: '2021-07-01' }, // eventek
      { title: 'event 1', date: '2021-07-01' }, // eventek
      { title: 'Event 2', date: '2021-07-02' }
    ]
  };
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr) // arg.dateStr az adott nap
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  } // hétvége elrejtése
}
