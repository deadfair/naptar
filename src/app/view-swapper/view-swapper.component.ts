import { getSelectedYear } from './../main-calendar/state/main-calendar.selector';
import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import {FormControl} from '@angular/forms';
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
  @Output() selectedMode = new EventEmitter<string>();

  years$!: Observable<number[]>;
  selectedYear$!:Observable<number>;

  constructor(private store:Store<AppState>) { }
  buttonFocused=false;

  ngOnInit(): void {
    this.selectedYear$=this.store.select(getSelectedYear)
    this.years$ = this.store.select(getYears)
    this.selectedMode.emit("Month");
  }

  onSelectedYearChange(year:any){
    this.store.dispatch(selectedYearChange({selectedYear: +year.option.value}))
  }

  modevalueChange(mode:any){
    this.selectedMode.emit(mode.value)
  }
}
