import { TravelPlusEventsInfo } from './../interface/travelPlusEventsInfo';
import { TravelEventInfo } from './../interface/travelEventInfo';
import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
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
  hiddenEvents:any[]=[];
  //Outputs
  @Output() closeBtnClick = new EventEmitter()  // bezáráshoz
  selectEvent:TravelEventInfo=new TravelEventInfo();

  // új abblakhoz
  eventWindow:boolean=false;

  ngOnInit(): void {
    this.openWindowInfo.plusEvents.forEach(element => {
      this.hiddenEvents.push(element);
    });
    console.log(this.hiddenEvents)
  }

  ngDoCheck(): void {
    this.renderPoint=new RenderPoint(this.openWindowInfo.jsEvent)
  }

  closeDeleteWindow(id:string|null){
    this.eventWindow=false;
    let newhiddenEvents:any[]=[];
    if (id!==null) {
      for (let index = 0,j=0; index < this.hiddenEvents.length ; index++,j++) {
        if (this.hiddenEvents[index].event._def.publicId!==id) {
          newhiddenEvents[j]=this.hiddenEvents[index];
        }else{
          j--;
        }
      }
    }
    this.hiddenEvents=newhiddenEvents;
  }


  close(){
    this.closeBtnClick.emit();
  }

  openEventWindow(calendarEvent:any,jsEvent:any){
    this.selectEvent=new TravelEventInfo(calendarEvent,jsEvent)
    this.eventWindow=true;
  }
}
