import { Component, Input, OnInit,Output ,EventEmitter} from '@angular/core';
import {PeopleEvent} from '../interface/event'
import { EventServiceService } from '../services/event-service.service';

@Component({
  selector: 'app-event-window',
  templateUrl: './event-window.component.html',
  styleUrls: ['./event-window.component.scss']
})
export class EventWindowComponent implements OnInit {
  @Input() aktEvent:any;          // target event
  @Input() windowX:string="40px";
  @Input() windowY:string="30px";
  @Input() eventId:string="00";  // target eventID
  @Output() closeEventWindow = new EventEmitter();

  stepperActive:boolean=false;
  deleteActive:boolean=false;
  selectEventId:string="0";
  event!: PeopleEvent ;
  constructor(private eventServicee:EventServiceService) {
  }

  ngOnInit(): void {
    this.event=this.eventServicee.getEventById(this.eventId)
  }

  closeDeletetWindow(){
    this.deleteActive=false;
    this.closeEventWindow.emit();
  }

  deleteEvent(id:string){
    this.selectEventId=id;
    this.deleteActive=true;
  }
}
