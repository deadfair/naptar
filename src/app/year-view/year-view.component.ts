import { Component, OnInit ,Output,Input,EventEmitter,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getselectedYear, getYears } from '../main-calendar/state/main-calendar.selector';
import { AppState } from '../store/app.state';


@Component({
  selector: 'app-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss']
})
export class YearViewComponent implements OnInit {
  @Output() selectedDate = new EventEmitter<Date | null>();
  @Input() year:number=0;
  years$!: Observable<number[]>;
  selectedYear$!: Observable<number>;

  clickedDate:Date | null=null;
  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.years$ = this.store.select(getYears)
    this.selectedYear$=this.store.select(getselectedYear)
    this.selectedYear$.subscribe(console.log)
  }

  selectDate(date:Date | null){
    this.selectedDate.emit(date);
    this.clickedDate=date;
  }
}
