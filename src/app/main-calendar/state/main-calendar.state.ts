
export interface MainCalendarState{
  years:number[];
  selectedYear:number;
  selectedDate:Date;
  selectedViewName:string;    // ["Year", "Month", "Week", "Day"]
  eventWindow:boolean;
  moreEventWindow:boolean;
  stepperWindow:boolean;
}


const YEARS:number[]=[2020,2021,2022,2023,2024,2025];
const SELECTED_YEAR:number=YEARS.includes(Number(new Date().getFullYear()))?
Number(new Date().getFullYear()):YEARS[Math.floor(YEARS.length/2)];


export const initialState:MainCalendarState={
  years:YEARS,
  selectedYear:SELECTED_YEAR,
  selectedDate:new Date(),
  selectedViewName:"Month",
  eventWindow:false,
  moreEventWindow:false,
  stepperWindow:false,
}





/*export class calendarView{
  viewName:string;
  fullcalendarViewName:string;
  viewClassName:string;
  constructor(){
    this.viewName="Month";
    this.viewClassName="fullcalendar-"+this.viewName.toLowerCase()+"-view-containe";
    this.fullcalendarViewName=fullcalendarViewName[this.viewName];
  }
}

export enum fullcalendarViewName{
  Month="dayGridMonth",
  Week="timeGridWeek",
  Day="timeGridDay",
  Year="monthGridYear"
}  */
