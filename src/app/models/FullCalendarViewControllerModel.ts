export class FullCalendarViewControllerModel{

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
      [FullCalendarViewControllerModel._dataMap['Day'].class]:   view===FullCalendarViewControllerModel._dataMap['Day'].viewName    ? true:false,
      [FullCalendarViewControllerModel._dataMap['Week'].class]:  view===FullCalendarViewControllerModel._dataMap['Week'].viewName   ? true:false,
      [FullCalendarViewControllerModel._dataMap['Month'].class]: view===FullCalendarViewControllerModel._dataMap['Month'].viewName  ? true:false,
    }
  }

  private setFullcalendarViewName(view:string){
    let result:string='';
    switch (view) {
      case FullCalendarViewControllerModel._dataMap['Day'].viewName:  result=FullCalendarViewControllerModel._dataMap['Day'].fullcalendarViewName;
        break;
      case FullCalendarViewControllerModel._dataMap['Week'].viewName:  result=FullCalendarViewControllerModel._dataMap['Week'].fullcalendarViewName;
        break;
      case FullCalendarViewControllerModel._dataMap['Month'].viewName:  result=FullCalendarViewControllerModel._dataMap['Month'].fullcalendarViewName;
        break;
      default:
        break;
    }
    this._fullcalendarViewName=result;
  }
}
