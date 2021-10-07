import { selectedViewNameChange } from './../main-calendar/state/main-calendar.actions';
import { getSelectedViewName, getSelectedYear } from './../main-calendar/state/main-calendar.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectedYearChange } from '../main-calendar/state/main-calendar.actions';
import { getYears } from '../main-calendar/state/main-calendar.selector';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-view-swapper',
  templateUrl: './view-swapper.component.html',
  styleUrls: ['./view-swapper.component.scss']
})
export class ViewSwapperComponent implements OnInit {

  years$!: Observable<number[]>;
  selectedYear$!:Observable<number>;
  selectedViewName$!:Observable<string>;

  buttonFocused=false;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.selectedYear$=this.store.select(getSelectedYear)
    this.years$ = this.store.select(getYears)
    this.selectedViewName$=this.store.select(getSelectedViewName)
  }

  onSelectedYearChange(year:any){
    this.store.dispatch(selectedYearChange({selectedYear: +year.option.value}))
  }

  modevalueChange(event:any){
    this.store.dispatch(selectedViewNameChange({selectedViewName:event.value}))
  }
}
