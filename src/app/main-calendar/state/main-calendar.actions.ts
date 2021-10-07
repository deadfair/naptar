import {createAction, props} from '@ngrx/store';


export const selectedYearChange=createAction('selectedYearChange',
props<{selectedYear:number}>());
export const selectedDateChange=createAction('selectedDateChange',
props<{selectedDate:Date}>());
