import { EventServiceService } from './../../services/event-service.service';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
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
  @Output() deletedEventId:EventEmitter<string> = new EventEmitter();
  @Input()  aktEvent:any;  // target event

  constructor(private eventServices:EventServiceService,private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  deleteEventById(id:string){
    this.deletedEventId.emit(id);
    this.aktEvent.remove();
    this.eventServices.deleteEventById(id);
  }
  onClose(){
    this.store.dispatch(deleteWindowChange({deleteWindow:false}));
   // this.closeDeletetWindow.emit();
  }
}
