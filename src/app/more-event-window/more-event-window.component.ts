import { DirectionModel } from './../models/directionModel';
import { eventWindowRenderPointChange } from './../main-calendar/state/main-calendar.actions';
import { getMoreEventWindowRenderPoint } from './../main-calendar/state/main-calendar.selector';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoreEventsModel } from '../models/moreEventsModel';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { eventWindowChange, moreEventWindowChange } from '../main-calendar/state/main-calendar.actions';
import { RenderPointModel } from '../models/renderPointModel';
import { EventModel } from '../models/eventModel';

@Component({
  selector: 'app-more-event-window',
  templateUrl: './more-event-window.component.html',
  styleUrls: ['./more-event-window.component.scss']
})
export class MoreEventWindowComponent implements OnInit {
  @Input() moreEventsModel:MoreEventsModel={moreEvents:[]};
  @Output() selectedEvent = new EventEmitter<EventModel>()
  renderPoint_X$!:Observable<number>;
  renderPoint_Y$!:Observable<number>;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.renderPoint_X$=this.store.select(getMoreEventWindowRenderPoint).pipe(map(point=>point.x))
    this.renderPoint_Y$=this.store.select(getMoreEventWindowRenderPoint).pipe(map(point=>point.y))
  }

  onClose(){
    this.store.dispatch(moreEventWindowChange({moreEventWindow:false}))
    this.store.dispatch(eventWindowChange({eventWindow:false}))
  }

  openEventWindow(calendarEvent:any,jsEvent:any){
    this.store.dispatch(eventWindowChange({eventWindow:true}))
    this.store.dispatch(eventWindowRenderPointChange({eventWindowRenderPoint:new RenderPointModel(jsEvent)}))
    if (calendarEvent.start.getDay() === 6 || calendarEvent.start.getDay() === 0) {
      this.selectedEvent.emit(new EventModel(DirectionModel.Left,calendarEvent))
    } else {
      this.selectedEvent.emit(new EventModel(DirectionModel.Right,calendarEvent))
    }
  }
}
