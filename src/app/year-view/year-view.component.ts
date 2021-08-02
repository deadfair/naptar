import { Component, OnInit } from '@angular/core';
import { yearsPerPage } from '@angular/material/datepicker';

@Component({
  selector: 'app-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss']
})
export class YearViewComponent implements OnInit {
  selectYear:number=0;
  year:number=0;
  selectedView:string="Year";
  constructor() { }
  years:number[]=[]
  ngOnInit(): void {
    this.yearsCreat(2000,2025);

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
