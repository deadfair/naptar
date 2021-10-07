
export class FullCalendarViewController{

  static _dataMap:any={
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


  get fullcalendarClassContainer():any{
    return this._fullcalendarClassContainer;
  }

  get fullcalendarViewName():string{
    return this._fullcalendarViewName;
  }

  constructor(view:string){
    this.setView(view)
  }

  private setView(view:string){
    this.setFullcalendarClassContainer(view);
    this.setFullcalendarViewName(view);
  }

  private setFullcalendarClassContainer(view:string):any{
    this._fullcalendarClassContainer={
      [FullCalendarViewController._dataMap['Day'].class]:   view===FullCalendarViewController._dataMap['Day'].viewName    ? true:false,
      [FullCalendarViewController._dataMap['Week'].class]:  view===FullCalendarViewController._dataMap['Week'].viewName   ? true:false,
      [FullCalendarViewController._dataMap['Month'].class]: view===FullCalendarViewController._dataMap['Month'].viewName  ? true:false,
    }
  }

  private setFullcalendarViewName(view:string){
    let result:string='';
    switch (view) {
      case FullCalendarViewController._dataMap['Day'].viewName:  result=FullCalendarViewController._dataMap['Day'].fullcalendarViewName;
        break;
      case FullCalendarViewController._dataMap['Week'].viewName:  result=FullCalendarViewController._dataMap['Week'].fullcalendarViewName;
        break;
      case FullCalendarViewController._dataMap['Month'].viewName:  result=FullCalendarViewController._dataMap['Month'].fullcalendarViewName;
        break;
      default:
        break;
    }
    this._fullcalendarViewName=result;
  }
}
