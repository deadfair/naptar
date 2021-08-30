
export class myFullCalendarController{

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
  private _previousSelectedView:string;
  private _SelectedView:string;
  private _fullcalendarViewName:string;

  constructor(view:string){
    this._fullcalendarClassContainer=this.setFullcalendarClassContainer(view);
    this._previousSelectedView="";
    this._SelectedView=view;
    this._fullcalendarViewName=this.setFullcalendarViewName(view);

  }

  public setFullcalendarClassContainer(view:string):any{
    let result={
      [this._dataMap['Day'].class]:   view===this._dataMap['Day'].viewName    ? true:false,
      [this._dataMap['Week'].class]:  view===this._dataMap['Week'].viewName   ? true:false,
      [this._dataMap['Month'].class]: view===this._dataMap['Month'].viewName  ? true:false,
    }
    return result;
  }

  public setFullcalendarViewName(view:string){
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
    return result;

  }

  public get fullcalendarClassContainer():any{
    return this._fullcalendarClassContainer;
  }
  public get previousSelectedView():string{
    return this._previousSelectedView;
  }
  public get SelectedView():string{
    return this._SelectedView;
  }
  public get fullcalendarViewName():string{
    return this._fullcalendarViewName;
  }
}
