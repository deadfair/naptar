import { RenderPoint } from "./point";

export class TravelEventInfo{

  //public calendarObject:any;
  private _jsEvent:any;
  private _calendarEvent:any;
  private _id:string;
  private _renderPoint:RenderPoint;

  constructor(calendarObject?:any,jsEvent?:any){
    // 1 bemenettel
    if (calendarObject===undefined && jsEvent===undefined) {
      this._jsEvent=undefined;
      this._calendarEvent=undefined;
      this._id="";
    }else{
      if (jsEvent!==undefined) {
        this._jsEvent=jsEvent;
      }else{
        this._jsEvent=calendarObject.jsEvent;
      }
        //this.calendarObject=calendarObject;
      this._calendarEvent=calendarObject.event;
      this._id=calendarObject.event.id;
    }
    this._renderPoint=new RenderPoint(this.jsEvent)
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


