import { DirectionModel } from './directionModel';

export class EventModel{

  private _calendarEvent:any;
  private _id:string;
  private _openPosition:DirectionModel;

  constructor(direction:DirectionModel,calendarObject?:any){

    this._openPosition=direction;
    this._id="";
    this._calendarEvent=undefined;

    if (calendarObject!==undefined) {
      this._id=calendarObject.event.id;
      this._calendarEvent=calendarObject.event;
    }
  }

  public get openPosition():string{
    return this._openPosition;
  }

  public get id() : string {
    return this._id
  }

  public get calendarEvent():any{
    return this._calendarEvent;
  }
}


