import {People} from "./people"

export interface PeopleEvent{
  date:string,
  name:string,
  start:string,
  end:string,
  peoples:People[],
  text:string,
}
