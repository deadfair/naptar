import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-calendar',
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.scss']
})
export class MainCalendarComponent implements OnInit {
  selectYear:number=0;
  year:number=0;
  selectedView:string="";
  constructor() { }
  years:number[]=[]
  ngOnInit(): void {
    this.yearsCreat(2020,2023);

  }

  selectedDate:Date|null=null;

  yearsCreat(start:number,end:number){
    for (let i = start,j=0; i < end+1; i++,j++) {
      this.years[j]=i;
    }
  }

  selectedDateInit(date:Date|null){
    this.selectedDate=date;
    console.log(this.selectedDate);
  }
  selectedYearInit(year:number){
    this.selectYear=year;
    this.year=year;
  }

  SelectedViewInit(view:string){
    this.selectedView=view;
  }
}
