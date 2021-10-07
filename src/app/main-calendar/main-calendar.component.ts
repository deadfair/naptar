import { Component, OnInit } from '@angular/core';
import { addDays, asCleanDays, Calendar, CalendarOptions, DayCellContent, FullCalendarComponent } from '@fullcalendar/angular';
import { Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { every } from 'rxjs/operators';
import { AppState } from '../store/app.state';
import { getselectedViewName, getYears } from './state/main-calendar.selector';

@Component({
  selector: 'app-main-calendar',
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.scss']
})
export class MainCalendarComponent implements OnInit {
  events:any[]=[];
  selectedView:string="";
  constructor(private store:Store<AppState>) { }
  selectedDate:Date|null=new Date();
  selectedViewName$!:Observable<string>;

  ngOnInit(): void {
    this.selectedViewName$=this.store.select(getselectedViewName)
  }
/*
  SelectedViewInit(view:string){
    this.selectedView=view;
    if (view!=='Year') {
      this.selectedDate=new Date();
    }
  }*/
}
