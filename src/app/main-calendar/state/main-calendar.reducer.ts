import {createReducer, on} from '@ngrx/store';
import { deleteWindowChange, eventWindowChange, moreEventWindowChange,eventWindowRenderPointChange, moreEventWindowRenderPointChange, selectedDateChange, selectedViewNameChange, selectedYearChange, stepperWindowChange } from './main-calendar.actions';
import { initialState } from './main-calendar.state';


const _mainCalendarReducer = createReducer(
  initialState,
  on(selectedYearChange,(state,action)=>{
    return {
        ...state,
        selectedYear:action.selectedYear,
    }}),
  on(selectedDateChange,(state,action)=>{
    return {
        ...state,
        selectedDate:action.selectedDate,
    }}),
  on(selectedViewNameChange,(state,action)=>{
    return {
        ...state,
        selectedViewName:action.selectedViewName,
    }}),
  on(moreEventWindowChange,(state,action)=>{
    return {
        ...state,
        moreEventWindow:action.moreEventWindow,
    }}),
  on(eventWindowChange,(state,action)=>{
    return {
        ...state,
        eventWindow:action.eventWindow,
    }}),
  on(stepperWindowChange,(state,action)=>{
    return {
        ...state,
        stepperWindow:action.stepperWindow,
    }}),
  on(deleteWindowChange,(state,action)=>{
    return {
        ...state,
        deleteWindow:action.deleteWindow,
    }}),
  on(moreEventWindowRenderPointChange,(state,action)=>{
    return {
        ...state,
        moreEventWindowRenderPoint:action.moreEventWindowRenderPoint,
    }}),
  on(eventWindowRenderPointChange,(state,action)=>{
    return {
        ...state,
        eventWindowRenderPoint:action.eventWindowRenderPoint,
    }}),



)
export function mainCalendarReducer(state:any,action:any){
    return _mainCalendarReducer(state,action);
}
