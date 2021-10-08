import {createAction, props} from '@ngrx/store';
import { RenderPointModel } from 'src/app/models/renderPointModel';


export const selectedYearChange=createAction('selectedYearChange',
props<{selectedYear:number}>());

export const selectedDateChange=createAction('selectedDateChange',
props<{selectedDate:Date}>());

export const selectedViewNameChange=createAction('selectedViewNameChange',
props<{selectedViewName:string}>());

export const moreEventWindowChange=createAction('moreEventWindowChange',
props<{moreEventWindow:boolean}>());

export const eventWindowChange=createAction('eventWindowChange',
props<{eventWindow:boolean}>());

export const stepperWindowChange=createAction('stepperWindowChange',
props<{stepperWindow:boolean}>());

export const deleteWindowChange=createAction('deleteWindowChange',
props<{deleteWindow:boolean}>());

export const moreEventWindowRenderPointChange=createAction('moreEventWindowRenderPointChange',
props<{moreEventWindowRenderPoint:RenderPointModel}>());

export const eventWindowRenderPointChange=createAction('eventWindowRenderPointChange',
props<{eventWindowRenderPoint:RenderPointModel}>());




