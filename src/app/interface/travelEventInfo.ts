import { Direction } from './direction';
import { RenderPoint } from "./point";

export class TravelEventInfo{

  //public calendarObject:any;
  private _jsEvent:any;
  private _calendarEvent:any;
  private _id:string;
  private _renderPoint:RenderPoint;
  private _openPosition:Direction; //RIGHT UP

  constructor(direction:Direction,calendarObject?:any,jsEvent?:any){

    this._openPosition=direction;
    this._id="";
    this._jsEvent=undefined;
    this._calendarEvent=undefined;

    if (calendarObject!==undefined) {
      this._id=calendarObject.event.id;
      this._jsEvent=calendarObject.jsEvent;
      this._calendarEvent=calendarObject.event;
    }

    if (jsEvent!==undefined) {
      this._jsEvent=jsEvent;
    }

    this._renderPoint=new RenderPoint(this.jsEvent)
  }

  public get openPosition():string{
    return this._openPosition;
  }

  public get renderPoint() : RenderPoint {
    return this._renderPoint;
  }

  public get id() : string {
    return this._id
  }
  public get calendarEvent():any{
    return this._calendarEvent;
  }

  public get jsEvent():any{
    return this._jsEvent;
  }
}


