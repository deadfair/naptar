import { stepperWindowChange } from './../main-calendar/state/main-calendar.actions';
import { Output } from '@angular/core';
import { Component, OnInit,  EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatListOption } from '@angular/material/list'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getStepperWindow } from '../main-calendar/state/main-calendar.selector';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  typeofReminder: string[] = ['Before 5 minute', 'Before 10 minute', 'Before 30 minute', 'Before 1 hour', 'Before 1 day'];
  typeofStartTime:string[] = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 AM', '12:30 AM', '1:00 PM'];
  typeofPeople:string[] = ['Joseph Maria', 'Maria Joseph'];
  typeofPlace:string[] = ['Menu item1', 'Museum', 'Menu item2', 'Menu item3', 'Menu item4', 'Menu item5'];
  selectedreminders:string[]=[""];
  selectedStartTime:string[]=[""];
  selectedPeople:string[]=[""];
  selectedPlace:string[]=[""];

  stepperWindow$!:Observable<boolean>;

  constructor(private store:Store<AppState>) {}

  onCloseStepper(){
    this.store.dispatch(stepperWindowChange({stepperWindow:false}))
  }
  hibaFgv(){
    console.log("Ez a gomb nem jó")
  }
  colors:string[]=['yellow',"red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red"]
  newEvent={
    reminder:"",
    startTime:"",
    people:"",
    place:"",
    color:""
  }
  stepperValue:string="reminder";

  ngOnInit(): void {
    this.stepperWindow$=this.store.select(getStepperWindow)
  }
  peopleInit(sPeople: string[]){
  this.selectedPeople=sPeople
  this.newEvent.people=this.selectedPeople[0];
  console.log(this.newEvent)
  }

  startTimeInit(sStartTime: string[]){
  this.selectedStartTime=sStartTime;
  this.newEvent.startTime=this.selectedStartTime[0];
  }

  remInit(sReminder: string[]) {
  this.selectedreminders=sReminder;
  this.newEvent.reminder=this.selectedreminders[0];
}
placeInit(sPlace: string[]){
this.selectedPlace=sPlace;
this.newEvent.place=this.selectedPlace[0];
}

}
