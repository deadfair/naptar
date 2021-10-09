import { EventServiceService } from './../../services/event-service.service';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { deleteWindowChange } from 'src/app/main-calendar/state/main-calendar.actions';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.scss']
})
export class DeleteEventComponent implements OnInit {
  @Input() eventId:string="0";
  @Input()  selectedEvent:any;
  @Output() deletedEventId:EventEmitter<string> = new EventEmitter();

  constructor(private eventServices:EventServiceService,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.disableBodyScroll(document.querySelector("body"))
  }

  deleteEventById(id:string){
    this.deletedEventId.emit(id);
    this.selectedEvent.remove();
    this.eventServices.deleteEventById(id);
    this.onClose();
  }

  onClose(){
    this.store.dispatch(deleteWindowChange({deleteWindow:false}));
    this.enableBodyScroll(document.querySelector("body"))
  }

  disableBodyScroll(element:any){
    if (!element) {return}
    element.classList.add("stop-scroll");
  }

  enableBodyScroll(element:any){
    if (!element) {return}
    element.classList.remove("stop-scroll");
  }
}
