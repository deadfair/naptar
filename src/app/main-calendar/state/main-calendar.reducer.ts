import {createReducer, on} from '@ngrx/store';
import { selectedDateChange, selectedViewNameChange, selectedYearChange } from './main-calendar.actions';
import { initialState } from './main-calendar.state';


const _mainCalendarReducer = createReducer(
    initialState,
    on(selectedYearChange,(state,action)=>{
      return {
          ...state,
          selectedYear:action.selectedYear,
      }
  }),
  on(selectedDateChange,(state,action)=>{
    return {
        ...state,
        selectedDate:action.selectedDate,
    }
}),
  on(selectedViewNameChange,(state,action)=>{
    return {
        ...state,
        selectedViewName:action.selectedViewName,
    }
}),

)
export function mainCalendarReducer(state:any,action:any){
    return _mainCalendarReducer(state,action);
}
