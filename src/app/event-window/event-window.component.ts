import { Direction } from './../interface/direction';
import { RenderPoint } from './../interface/point';
import { TravelEventInfo } from './../interface/travelEventInfo';
import { Component, Input, OnInit,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-window',
  templateUrl: './event-window.component.html',
  styleUrls: ['./event-window.component.scss']
})
export class EventWindowComponent implements OnInit {

  constructor() {}
  //Inputs
  @Input() openWindowInfo!:TravelEventInfo;
  renderPoint:RenderPoint=new RenderPoint();
  event: any;
  openPosition={
    'event-window-open-up':false,
    'event-window-open-right':false,
    'event-window-open-left':false,

  };
  //Outputs
  @Output() closeEventWindow:EventEmitter<null|string> = new EventEmitter();
  @Output() stepperActive:EventEmitter<boolean> = new EventEmitter();

  stepperActiveToTrue(){
    this.stepperActive.emit(true)
  }
  deleteActive:boolean=false;

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.event=this.openWindowInfo.calendarEvent;
    this.renderPoint=new RenderPoint(this.openWindowInfo.jsEvent)
    this.eventWindowPositionChange();
  }
  closeDeletetWindow(id:null|string){
    this.deleteActive=false;
    this.closeEventWindow.emit(id);
  }
  eventWindowPositionChange(){
    if (this.openWindowInfo.openPosition===Direction.Up) {
      this.openPosition={
        'event-window-open-up':true,
        'event-window-open-right':false,
        'event-window-open-left':false,
      }
    }
    if (this.openWindowInfo.openPosition===Direction.Right) {
      this.openPosition={
        'event-window-open-up':false,
        'event-window-open-right':true,
        'event-window-open-left':false,
      }
    }
    if (this.openWindowInfo.openPosition===Direction.Left) {
      this.openPosition={
        'event-window-open-up':false,
        'event-window-open-right':false,
        'event-window-open-left':true,
      }
    }

  }
}
