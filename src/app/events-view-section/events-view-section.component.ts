import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Calendar} from '@fullcalendar/angular';

@Component({
  selector: 'app-events-view-section',
  templateUrl: './events-view-section.component.html',
  styleUrls: ['./events-view-section.component.scss']
})
export class EventsViewSectionComponent implements OnInit {
  @Input() selectedDate:Date|null=null;
  @Input() events:any[]=[];
  isYesterday:boolean=false;
  tuday=new Date();
  yesterday=new Date(this.tuday.valueOf()-1000*60*60*24);
  constructor(public datepipe: DatePipe) { }
  ngOnInit(): void {}
  ngDoCheck(): void {
    console.log(this.selectedDate,this.tuday)
    if (this.datepipe.transform(this.tuday, 'yyyy-MM-dd')===this.datepipe.transform(this.selectedDate, 'yyyy-MM-dd')) {
      this.isYesterday=true;
    }else{
      this.isYesterday=false;
    }
    this.yesterday=new Date(this.tuday.valueOf()-1000*60*60*24);
    //this.tuday=new Date();
  }
}
