
export class FullCalendarViewController{

  private _dataMap:any={
    'Day':{
      viewName:'Day',
      class:'fullcalendar-day-view-container',
      fullcalendarViewName:'timeGridDay',
    },
    'Week':{
      viewName:'Week',
      class:'fullcalendar-week-view-container',
      fullcalendarViewName:'timeGridWeek',
    },
    'Month':{
      viewName:'Month',
      class:'fullcalendar-month-view-container',
      fullcalendarViewName:'dayGridMonth',
    },

  }
  private _fullcalendarClassContainer:any;
  private _fullcalendarViewName:string="";
  private _previousSelectedView:string="";
  private _eventwindow:boolean=false;        // eventadatok
  private _moreEventWindow:boolean=false;    // + felnyílófül

  get fullcalendarClassContainer():any{
    return this._fullcalendarClassContainer;
  }
  get previousSelectedView():string{
    return this._previousSelectedView;
  }
  get fullcalendarViewName():string{
    return this._fullcalendarViewName;
  }
  get moreEventWindow():boolean{
    return this._moreEventWindow;
  }
  get eventwindow():boolean{
    return this._eventwindow;
  }
  set moreEventWindow(value:boolean){
    this._moreEventWindow=value;
  }
  set eventwindow(value:boolean){
    this._eventwindow=value;
  }

  constructor(view:string){
    this.setFullcalendarClassContainer(view);
    this._previousSelectedView=view;
    this.setFullcalendarViewName(view);
  }

  public setView(view:string){
    this.setFullcalendarClassContainer(view);
    this.setFullcalendarViewName(view);
    this.eventWindowsChangeToFalseIfNeed(view);
    this._previousSelectedView=view;
  }

  private setFullcalendarClassContainer(view:string):any{
    this._fullcalendarClassContainer={
      [this._dataMap['Day'].class]:   view===this._dataMap['Day'].viewName    ? true:false,
      [this._dataMap['Week'].class]:  view===this._dataMap['Week'].viewName   ? true:false,
      [this._dataMap['Month'].class]: view===this._dataMap['Month'].viewName  ? true:false,
    }
  }

  private setFullcalendarViewName(view:string){
    let result:string='';
    switch (view) {
      case this._dataMap['Day'].viewName:  result=this._dataMap['Day'].fullcalendarViewName;
        break;
      case this._dataMap['Week'].viewName:  result=this._dataMap['Week'].fullcalendarViewName;
        break;
      case this._dataMap['Month'].viewName:  result=this._dataMap['Month'].fullcalendarViewName;
        break;
      default:
        break;
    }
    this._fullcalendarViewName=result;
  }


  private eventWindowsChangeToFalseIfNeed(newView:string):void{
    if(!this.isSelectedView(newView)){
      this._eventwindow=false;
      this._moreEventWindow=false;
    }
  }

  private isSelectedView(newView:string):boolean{
    return newView===this.previousSelectedView;
  }
}
