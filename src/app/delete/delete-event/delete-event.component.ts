import { EventServiceService } from './../../services/event-service.service';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.scss']
})
export class DeleteEventComponent implements OnInit {
  @Input() eventId:string="0";
  @Output() closeDeletetWindow = new EventEmitter();
  @Input()  aktEvent:any;  // target event

  constructor(private eventServices:EventServiceService) { }

  ngOnInit(): void {
  }
  delete(id:string):boolean{
    this.close();
    this.aktEvent.remove();
    return this.eventServices.deleteEventById(id);
  }
  close():boolean{
    this.closeDeletetWindow.emit();
    return false;
  }
}
