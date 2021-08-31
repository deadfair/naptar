import { PeopleEvent } from './../interface/event';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  constructor() { }
  allEvent:any[]=
  [
    {
      id:"01",
      title: 'Event1',
      date: '2021-09-06',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"02",
      title: 'Event2',
      date: '2021-09-12',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"03",
      title: 'Event3',
      start: '2021-09-05',
      end:'2021-09-16',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"04",
      title: 'Event4',
      date: '2021-09-30',
      backgroundColor:'green',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"05",
      title: 'Event5',
      date: '2021-09-12',
      extendedProps: {
        eventText: ``
      }
    },
    {
      id:"06",
      title: 'Event6',
      date: '2021-09-12',
      extendedProps: {
        eventText: ``
      }
    },
    {
      id:"07",
      title: 'Eventttt',
      backgroundColor:'green',
      start: '2021-08-31T14:30:00' ,
      end:'2021-08-31T17:30:00',
      extendedProps: {
        eventText: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ultricies quam et
        fringilla convallis mauris. Fermentum tempor nunc,
        faucibus adipiscing gravida suspendisse. Iaculis
        in sit a lectus dolor massa pretium ut. Orci
        blandit nunc ut cum felis arcu. Dictum aliquet
        quisque imperdiet purus, vitae accumsan posuere amet.`
      }
    },
    {
      id:"08",
      title: 'Event7',
      date: '2021-09-12',
      extendedProps: {
        eventText: ``
      }
    },
    {
      id:"09",
      title: 'Event8',
      date: '2021-09-06',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"10",
      title: 'Event9',
      date: '2021-09-06',
      extendedProps: {
        eventText: ``
      }
    }, // eventek
    {
      id:"11",
      title: 'Event10',
      borderColor :'yellow',
      backgroundColor:'yellow',
      textColor :'red',
      date: '2021-09-06',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"12",
      title: 'Event11',
      borderColor :'red',
      backgroundColor:'red',
      date: '2021-09-02',
      extendedProps: {
        eventText: ``
      }
    },
    {
      id:"13",
      title: 'Event12',
      backgroundColor:'black',
      date: '2021-09-16',
      start: '2021-09-30T10:30:00',
      end:'2021-09-30T12:30:00',
      extendedProps: {
        eventText: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ultricies quam et fringilla convallis
        mauris. Fermentum tempor nunc, faucibus adipiscing
        gravida suspendisse. Iaculis in sit a lectus dolor
        massa pretium ut. Orci blandit nunc ut cum felis arcu.
        Dictum aliquet quisque imperdiet purus, vitae accumsan
        posuere amet.`,
      }
    },
    {
      id:"14",
      title: 'Event14',
      date: '2021-09-07',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"15",
      title: 'Event15',
      date: '2021-09-0',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"16",
      title: 'Event16',
      date: '2021-09-0',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"17",
      title: 'Event17',
      date: '2021-09-0',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
    {
      id:"18",
      title: 'Event18',
      date: '2021-09-0',
      extendedProps: {
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
        eventText:"Visit to discuss improvements, and also dont forget to bring the ID card, as discused. https://zoom.us/i/1983475281"
      }
    },
  ]

  /*[
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
    }]*/
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
