import { map } from 'rxjs/operators';
import { getSelectedDate } from './../main-calendar/state/main-calendar.selector';
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-events-view-section',
  templateUrl: './events-view-section.component.html',
  styleUrls: ['./events-view-section.component.scss']
})
export class EventsViewSectionComponent implements OnInit {

  @Input() events:any[]=[];

  selectedDate$!:Observable<Date>;
  isYesterday$!:Observable<boolean>;

  yesterday=new Date(new Date().valueOf()-1000*60*60*24);

  constructor(public datepipe: DatePipe,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.selectedDate$=this.store.select(getSelectedDate)
    this.isYesterday$=this.store.select(getSelectedDate)
    .pipe(map((date)=>(this.datepipe.transform(new Date(), 'yyyy-MM-dd')===this.datepipe.transform(date, 'yyyy-MM-dd'))?true:false))
  }
}
