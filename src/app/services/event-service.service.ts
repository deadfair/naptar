import { PeopleEvent } from './../interface/event';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  constructor() { }
  allEvent:PeopleEvent[]=[
    {
      id:"01",
      date:"2020-03-21",
      name:"Event title1",
      start:"8:30",
      end:"11:00 AM",
      peoples:[],
      text:"üres"
    },
    {
      id:"02",
      date:"2020-03-21",
      name:"Event title2",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"03",
      date:"2020-03-21",
      name:"Event title3",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"04",
      date:"2020-03-21",
      name:"Event title4",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"05",
      date:"2020-03-21",
      name:"Event title5",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"06",
      date:"2020-03-21",
      name:"Event title6",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"07",
      date:"2020-03-21",
      name:"Event title7",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"08",
      date:"2020-03-21",
      name:"Event title8",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"09",
      date:"2020-03-21",
      name:"Event title9",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"10",
      date:"2020-03-21",
      name:"Event title10",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"11",
      date:"2020-03-21",
      name:"Event title11",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    },    {
      id:"12",
      date:"2020-03-21",
      name:"Event title12",
      start:"8:30",
      end:"11:00 AM",
      peoples:[
        {
        peopleId:"01",
        peopleUrl:"../../assets/01.png"
        },
        {
        peopleId:"02",
        peopleUrl:"../../assets/02.png"
        }
      ],
      text:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
    }]
  getAllEvents():PeopleEvent[]{
    return this.allEvent;
  }

  getEventById(id:string):PeopleEvent{
    let allEvents:PeopleEvent[]=this.getAllEvents();
    for (const iterator of allEvents) {
      if (iterator.id===id) {
        return iterator;
      }
    }
    return {  id:"00",
              date:"0000-00-00",
              name:"",
              start:"00:00",
              end:"00:00 AM",
              peoples:[
                {
                peopleId:"00",
                peopleUrl:"0.png"
                },
                {
                peopleId:"00",
                peopleUrl:"0.png"
                }
              ],
              text:""
    }
  }
  deleteEventById(id:string):boolean{
    for (let index = 0; index < this.allEvent.length; index++) {
      if (this.allEvent[index].id===id) {
        this.allEvent.splice(index,index+1)
        return true;
      }
    }
    return false;
  }

}
