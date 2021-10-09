import { deleteWindowChange, stepperWindowChange } from './../main-calendar/state/main-calendar.actions';
import { Component, Input, OnInit,Output ,EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';
import { getDeleteWindow, getEventWindowRenderPoint } from '../main-calendar/state/main-calendar.selector';
import { EventModel } from '../models/eventModel';
import { map } from 'rxjs/operators';
import { DirectionModel } from '../models/directionModel';

@Component({
  selector: 'app-event-window',
  templateUrl: './event-window.component.html',
  styleUrls: ['./event-window.component.scss']
})
export class EventWindowComponent implements OnInit {

  @Input() selectedEvent!:EventModel;
  @Output() closeDeletetWindow:EventEmitter<string> = new EventEmitter();

  openPosition={
    'event-window-open-up':false,
    'event-window-open-right':false,
    'event-window-open-left':false,
  };

  renderPoint_X$!:Observable<number>;
  renderPoint_Y$!:Observable<number>;
  deleteWindow$!:Observable<boolean>;
  constructor(private store:Store<AppState>) {}


  onStepperOpen(){this.store.dispatch(stepperWindowChange({stepperWindow:true}))}

  onDeleteWindowOpen(){this.store.dispatch(deleteWindowChange({deleteWindow:true}))}

  ngOnInit(): void {
    this.deleteWindow$=this.store.select(getDeleteWindow)
    this.renderPoint_X$=this.store.select(getEventWindowRenderPoint).pipe(map(point=>point.x))
    this.renderPoint_Y$=this.store.select(getEventWindowRenderPoint).pipe(map(point=>point.y))
  }

  ngDoCheck(): void {
    this.eventWindowPositionChange();
  }
  onCloseDeletetWindow(id:string){
    this.closeDeletetWindow.emit(id);
  }
  eventWindowPositionChange(){
    if (this.selectedEvent.openPosition===DirectionModel.Up) {
      this.openPosition={
        'event-window-open-up':true,
        'event-window-open-right':false,
        'event-window-open-left':false,
      }
    }
    if (this.selectedEvent.openPosition===DirectionModel.Right) {
      this.openPosition={
        'event-window-open-up':false,
        'event-window-open-right':true,
        'event-window-open-left':false,
      }
    }
    if (this.selectedEvent.openPosition===DirectionModel.Left) {
      this.openPosition={
        'event-window-open-up':false,
        'event-window-open-right':false,
        'event-window-open-left':true,
      }
    }
  }
}
