
export interface MainCalendarState{
years:number[];
selectedYear:number;
}

export const initialState:MainCalendarState={
  years:[2020,2021,2022,2023,2024,2025],
  selectedYear:Number(new Date().getFullYear())
}
