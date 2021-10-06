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
  //@Output() selectedYear = new EventEmitter<number>();
  @Output() selectedMode = new EventEmitter<string>();

  years$!: Observable<number[]>;

  constructor(private store:Store<AppState>) { }
  panel='year-select-panel';
  defaultSelectedValue:number|null=null;
  buttonFocused=false;

  ngOnInit(): void {
    this.years$ = this.store.select(getYears)
    const nowYear=Number(new Date().getFullYear());
    this.years$.subscribe(y=>{
      if (y.includes(nowYear)){
        this.defaultSelectedValue=nowYear;
      } else {
        this.defaultSelectedValue=y[Math.floor(y.length/2)];
      }
      this.store.dispatch(selectedYearChange({selectedYear: +this.defaultSelectedValue}))
    });

    this.selectedMode.emit("Month");
  }

  onSelectedYearChange(year:any){
    this.store.dispatch(selectedYearChange({selectedYear: +year.option.value}))
    /*
    this.selectedYear.emit(year.option.value);*/
    this.defaultSelectedValue=year.option.value;
  }

  modevalueChange(mode:any){
    this.selectedMode.emit(mode.value)
  }
}
