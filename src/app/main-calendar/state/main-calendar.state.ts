import { RenderPointModel } from './../../models/renderPointModel';

export interface MainCalendarState{
  years:number[];
  selectedYear:number;
  selectedDate:Date;
  selectedViewName:string;    // ["Year", "Month", "Week", "Day"]


  stepperWindow:boolean;
  deleteWindow:boolean;

  eventWindow:boolean;
  eventWindowRenderPoint:RenderPointModel;

  moreEventWindow:boolean;
  moreEventWindowRenderPoint:RenderPointModel;
}


const YEARS:number[]=[2020,2021,2022,2023,2024,2025];
const SELECTED_YEAR:number=YEARS.includes(Number(new Date().getFullYear()))?
Number(new Date().getFullYear()):YEARS[Math.floor(YEARS.length/2)];


export const initialState:MainCalendarState={
  years:YEARS,
  selectedYear:SELECTED_YEAR,
  selectedDate:new Date(),
  selectedViewName:"Month",
  stepperWindow:false,
  deleteWindow:false,

  eventWindow:false,
  eventWindowRenderPoint:new RenderPointModel(),

  moreEventWindow:false,
  moreEventWindowRenderPoint:new RenderPointModel(),
}



