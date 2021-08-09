import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-month-picker',
  templateUrl: './mini-month-picker.component.html',
  styleUrls: ['./mini-month-picker.component.scss']
})
export class MiniMonthPickerComponent implements OnInit {

  months:string[]=[]
  constructor() { }

  ngOnInit(): void {
    this.setThisMonths();

  }

  setThisMonths(){
    for (let index = 0; index < 12; index++) {
      let iMonth=new Date(2021,index,1)
      this.months[index]=iMonth.toLocaleString('en-us', { month: 'short' });
    }
  }
}
