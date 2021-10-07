import {createAction, props} from '@ngrx/store';


export const selectedYearChange=createAction('selectedYearChange',
props<{selectedYear:number}>());

export const selectedDateChange=createAction('selectedDateChange',
props<{selectedDate:Date}>());

export const selectedViewNameChange=createAction('selectedViewNameChange',
props<{selectedViewName:string}>());

export const moreEventWindowChange=createAction('moreEventWindowChange',
props<{moreEventWindow:boolean}>());

export const eventWindowChange=createAction('eventWindowChange',
props<{EventWindow:boolean}>());
