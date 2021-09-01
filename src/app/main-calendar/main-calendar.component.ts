import { Component, OnInit } from '@angular/core';
import { addDays, asCleanDays, Calendar, CalendarOptions, DayCellContent, FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-main-calendar',
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.scss']
})
export class MainCalendarComponent implements OnInit {
  events:any[]=[];
  selectYear:number=0;
  year:number=0;
  selectedView:string="";
  constructor() { }
  years:number[]=[];
  selectedDate:Date|null=new Date();
  ngOnInit(): void {
    this.yearsCreat(2020,2023);
  }


  yearsCreat(start:number,end:number){
    for (let i = start,j=0; i < end+1; i++,j++) {
      this.years[j]=i;
    }
  }

  selectedDateInit(date:Date|null){
    this.selectedDate=date;
  }
  selectedYearInit(year:number){
    this.selectYear=year;
    this.year=year;
  }

  SelectedViewInit(view:string){
    this.selectedView=view;
    if (view!=='Year') {
      this.selectedDate=new Date();
    }
  }
}
