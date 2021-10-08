import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { getSelectedViewName } from './state/main-calendar.selector';

@Component({
  selector: 'app-main-calendar',
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.scss']
})
export class MainCalendarComponent implements OnInit {
  events!:any[];
  selectedViewName$!:Observable<string>;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.selectedViewName$=this.store.select(getSelectedViewName)
  }
  setEvents(events:any[]){this.events=events}
}
