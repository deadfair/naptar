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
    'event-window-open-up':true,
    'event-window-open-right':false,
  };
  //Outputs
  @Output() closeEventWindow:EventEmitter<null|string> = new EventEmitter();

  stepperActive:boolean=false;
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
    if (this.openWindowInfo.openPosition==="RIGHT") {
      this.openPosition={
        'event-window-open-up':false,
        'event-window-open-right':true,
      }
    } else { //===UP
      this.openPosition={
        'event-window-open-up':true,
        'event-window-open-right':false,
      }
    }
  }
}
