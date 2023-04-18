import { EventInput } from '@fullcalendar/core';



let eventGuid = 0;
var arr_names = new Array(3);
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today


export const INITIAL_EVENTS: EventInput[] = [

  
];

export function createEventId() {
  return String(eventGuid++);
}






