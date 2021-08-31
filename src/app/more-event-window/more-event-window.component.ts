import { Direction } from './../interface/direction';
import { TravelPlusEventsInfo } from './../interface/travelPlusEventsInfo';
import { TravelEventInfo } from './../interface/travelEventInfo';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { RenderPoint } from '../interface/point';

@Component({
  selector: 'app-more-event-window',
  templateUrl: './more-event-window.component.html',
  styleUrls: ['./more-event-window.component.scss']
})
export class MoreEventWindowComponent implements OnInit {

  constructor() { }
  //Inputs
  @Input() openWindowInfo:TravelPlusEventsInfo={jsEvent:null,plusEvents:[]};
  renderPoint:RenderPoint=new RenderPoint();
  //Outputs
  @Output() closeBtnClick = new EventEmitter()  // bezáráshoz
  @Output() selectedEvent = new EventEmitter<TravelEventInfo>()  // fel

  // új abblakhoz
  eventWindow:boolean=false;


  ngOnInit(): void {}

  ngDoCheck(): void {
    this.renderPoint=new RenderPoint(this.openWindowInfo.jsEvent)
  }

  close(){
    this.closeBtnClick.emit();
  }

  openEventWindow(calendarEvent:any,jsEvent:any){
    console.log(calendarEvent.start.getDay())
  if (calendarEvent.start.getDay() === 6 || calendarEvent.start.getDay() === 0) {
    this.selectedEvent.emit(new TravelEventInfo(Direction.Left,calendarEvent,jsEvent))
  } else {
    this.selectedEvent.emit(new TravelEventInfo(Direction.Right,calendarEvent,jsEvent))
  }
  }
}
