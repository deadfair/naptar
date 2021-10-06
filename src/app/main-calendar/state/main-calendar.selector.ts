import {createFeatureSelector, createSelector} from '@ngrx/store';
import { MainCalendarState } from './main-calendar.state';

const getMainCalendarState = createFeatureSelector<MainCalendarState>('mainCalendar');

export const getYears=createSelector(getMainCalendarState,state=>{
    return state.years;
})
export const getselectedYear=createSelector(getMainCalendarState,state=>{
    return state.selectedYear;
})
