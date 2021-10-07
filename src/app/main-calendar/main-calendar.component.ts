import { Component, OnInit } from '@angular/core';
import { addDays, asCleanDays, Calendar, CalendarOptions, DayCellContent, FullCalendarComponent } from '@fullcalendar/angular';
import { Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { every } from 'rxjs/operators';
import { AppState } from '../store/app.state';
import { getYears } from './state/main-calendar.selector';

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


  xxx$:Observable<number[]> | undefined;
  xxx:number[]=[];

  ngOnInit(): void {
    this.xxx$ = this.store.select(getYears)
    this.xxx$.subscribe(e=>this.xxx=e)
    from(this.xxx).pipe(
      every(x=>x!==2021)
    ).subscribe(console.log);
    let bol;
    this.xxx$.subscribe(e=>bol=e.includes(2021));
    console.log(bol)
    console.log(this.xxx);
    console.log(this.xxx$.subscribe(e=>e.includes(2021)));
  }




  selectedDateInit(date:Date|null){
    this.selectedDate=date;
  }


  SelectedViewInit(view:string){
    this.selectedView=view;
    if (view!=='Year') {
      this.selectedDate=new Date();
    }
  }
}
