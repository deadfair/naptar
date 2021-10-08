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
export const getSelectedViewName=createSelector(getMainCalendarState,state=>{
    return state.selectedViewName;
})
export const getEventWindow=createSelector(getMainCalendarState,state=>{
    return state.eventWindow;
})
export const getMoreEventWindow=createSelector(getMainCalendarState,state=>{
    return state.moreEventWindow;
})
export const getStepperWindow=createSelector(getMainCalendarState,state=>{
    return state.stepperWindow;
})
export const getDeleteWindow=createSelector(getMainCalendarState,state=>{
    return state.deleteWindow;
})
export const getMoreEventWindowRenderPoint=createSelector(getMainCalendarState,state=>{
    return state.moreEventWindowRenderPoint;
})
export const getEventWindowRenderPoint=createSelector(getMainCalendarState,state=>{
    return state.eventWindowRenderPoint;
})




