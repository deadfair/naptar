import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'



@Component({
  selector: 'app-get-events-by-day',
  templateUrl: './get-events-by-day.component.html',
  styleUrls: ['./get-events-by-day.component.scss']
})
export class GetEventsByDayComponent implements OnInit {

  @Input() date!:Date|null;
  @Input() events!:any[];
  @Input() dayName!:string;

  selectEvents!:any[];

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {}

  ngOnChanges(): void {this.getEventsBySelectedDay()}

  getEventsBySelectedDay(){
    this.selectEvents=[];
    for (const event of this.events) {
      if (this.datepipe.transform(event.date, 'yyyy-MM-dd')===this.datepipe.transform(this.date, 'yyyy-MM-dd')) {
        this.selectEvents.push(event);
      }
    }
  }




}
