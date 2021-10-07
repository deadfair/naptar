import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getSelectedYear } from '../main-calendar/state/main-calendar.selector';
import { AppState } from '../store/app.state';


@Component({
  selector: 'app-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss']
})
export class YearViewComponent implements OnInit {
  selectedYear$!: Observable<number>;

  changerSubscription!:Subscription;
  changer:boolean=false;

  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.selectedYear$=this.store.select(getSelectedYear)
    this.changerSubscription=this.selectedYear$.subscribe(()=>this.changer=!this.changer)
  }

  ngOnDestroy(): void {
    this.changerSubscription.unsubscribe();
  }
}
