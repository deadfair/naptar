import { getSelectedYear } from './../main-calendar/state/main-calendar.selector';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import{DatepickerMonthHeaderComponent} from'./datepicker-month-header/datepicker-month-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { selectedDateChange } from '../main-calendar/state/main-calendar.actions';
import { Observable } from 'rxjs';
import { getSelectedDate } from '../main-calendar/state/main-calendar.selector';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-datepicker-month',
  templateUrl: './datepicker-month.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./datepicker-month.component.scss']
})
export class DatepickerMonthComponent implements OnInit {
  @Input() startAtMonthDay!:string;

  selectedDate$!:Observable<Date>;
  startAtDate$!:Observable<Date>;
  startAtYear$!:Observable<number>;

  datepickerMonthComponent=DatepickerMonthHeaderComponent;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.startAtYear$=this.store.select(getSelectedYear);
    this.selectedDate$=this.store.select(getSelectedDate);
    this.startAtDate$=this.startAtYear$.pipe(
      map(data=> new Date(data+this.startAtMonthDay)),
    );
  }

  onSelectedDate(value:Date){
    this.store.dispatch(selectedDateChange({selectedDate: value}))
  }
}
