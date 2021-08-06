import { EventServiceService } from './../../services/event-service.service';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.scss']
})
export class DeleteEventComponent implements OnInit {
  @Input() eventId:string="0";
  @Output() closeDeletetWindow:EventEmitter<null|string> = new EventEmitter();
  @Input()  aktEvent:any;  // target event

  constructor(private eventServices:EventServiceService) { }

  ngOnInit(): void {
  }
  delete(id:string){
    this.closeDeletetWindow.emit(id);
    this.aktEvent.remove();
    this.eventServices.deleteEventById(id);
  }
  close(){
    this.closeDeletetWindow.emit();
  }
}
