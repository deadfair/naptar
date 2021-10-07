import {createFeatureSelector, createSelector} from '@ngrx/store';
import { MainCalendarState } from './main-calendar.state';

const getMainCalendarState = createFeatureSelector<MainCalendarState>('mainCalendar');

export const getYears=createSelector(getMainCalendarState,state=>{
    return state.years;
})
export const getSelectedYear=createSelector(getMainCalendarState,state=>{
    return state.selectedYear;
})
export const getSelectedDate=createSelector(getMainCalendarState,state=>{
    return state.selectedDate;
})
