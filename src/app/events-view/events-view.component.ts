import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.scss']
})
export class EventsViewComponent implements OnInit,OnChanges {
  @Input() selectedDate:Date|null=null;
  aktevent={};
  constructor(public datepipe: DatePipe) { }
  events=[
    {
      date:"2020-01-01",
      name:"béla",
    },
    {
      date:"2020-03-21",
      name:"jani"
    }

  ]
  ngOnInit(): void {
  }
  fgv(){
    console.log(this.selectedDate)
  }
  ngOnChanges(): void {
    this.getActEvent();

  }
  getActEvent(){
    for (const event of this.events) {
      if (event.date===this.datepipe.transform(this.selectedDate, 'yyyy-MM-dd')) {
        console.log("bumm")
        return;
      }
    }
    console.log("nincs esemény")
  }

}
