import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-more-event-window',
  templateUrl: './more-event-window.component.html',
  styleUrls: ['./more-event-window.component.scss']
})
export class MoreEventWindowComponent implements OnInit {
  @Input() public data:any[]=[];
  @Input() public jsEvent:any;
  @Input() windowX:string="300px";
  @Input() windowY:string="300px";
  @Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.windowX=this.jsEvent.x+"px";
    this.windowY=this.jsEvent.y+"px";

  }
  close(){
    this.btnClick.emit();
  }
}
