import {People} from "./people"

export interface PeopleEvent{
  id:string,
  date:string,
  name:string, //title
  start:string,
  end:string,
  peoples:People[],
  text:string,
}
