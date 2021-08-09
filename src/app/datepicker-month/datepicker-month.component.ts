import { Component, OnInit,  ChangeDetectionStrategy, Input, Output,EventEmitter} from '@angular/core';
import{DatepickerMonthHeaderComponent} from'./datepicker-month-header/datepicker-month-header.component';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
@Component({
  selector: 'app-datepicker-month',
  templateUrl: './datepicker-month.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./datepicker-month.component.scss']
})
export class DatepickerMonthComponent implements OnInit {
  @Input() startAt:string="";
  startDate:Date=new Date();
  @Input() clickedDate:Date|null=null;
  @Output() selectedDate = new EventEmitter<Date | null>();
  constructor() { }
  datepickerMonthComponent=DatepickerMonthHeaderComponent;
  ngOnInit(): void {
    this.startDate=new Date(this.startAt);
  }

  selectChange(value:Date|null){
    this.selectedDate.emit(value);
    //this.clickedDate=value;
  }
/*
  addClass:MatCalendarCellClassFunction<Date>=(d:Date,v:string)=>{
    console.log(d,this.clickedDate)
      return 'datepicker-cell-class';
  }*/
}
