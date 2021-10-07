import { Component, OnInit ,Output,Input,EventEmitter,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getSelectedYear, getYears } from '../main-calendar/state/main-calendar.selector';
import { AppState } from '../store/app.state';


@Component({
  selector: 'app-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss']
})
export class YearViewComponent implements OnInit {
  @Output() selectedDate = new EventEmitter<Date | null>();
  years$!: Observable<number[]>;
  selectedYear$!: Observable<number>;

  clickedDate:Date | null=null;
  changerSubscription!:Subscription;
  changer:boolean=false;


  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.years$ = this.store.select(getYears)
    this.selectedYear$=this.store.select(getSelectedYear)

    this.changerSubscription=this.selectedYear$.subscribe(()=>{
      console.log(21);
      this.changer=!this.changer;
      })
  }

  ngOnDestroy(): void {
    this.changerSubscription.unsubscribe();
  }

  selectDate(date:Date | null){
    this.selectedDate.emit(date);
    this.clickedDate=date;
  }
}
