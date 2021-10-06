import { mainCalendarReducer } from "../main-calendar/state/main-calendar.reducer";
import { MainCalendarState } from "../main-calendar/state/main-calendar.state";

export interface AppState{
  mainCalendar:MainCalendarState;
}
export const appReducer={
  mainCalendar:mainCalendarReducer,
}
