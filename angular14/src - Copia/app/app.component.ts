import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


import { INITIAL_EVENTS, createEventId } from './event-utils';
import { SupplierService } from './supplier.service';
import { PedComponent } from './pedi/pedi.component';

@Component({
  selector: 'app-root',
  templateUrl: './calendar.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SupplierService],
})
export class AppComponent implements OnInit{
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    initialView: 'dayGridMonth',
    initialEvents: [], // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    locale: 'pt-Br',
    slotLabelFormat: 'HH:mm',
    allDayText: '24 horas',
   
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  currentEvents: EventApi[] = [];

  constructor(private changeDetector: ChangeDetectorRef,private oServices: SupplierService) {
  }

  ngOnInit(): void {
   this.addevento(this)
  }
  addevento(evento){
    let aItensEvnt :  EventInput[] = []

    this.oServices.getSupplierList().subscribe(
      (res) => {
     

      res.forEach(item => { 
        this.currentEvents.push(item)
          aItensEvnt.push(item)
      });
   
      },
      (error) => {
      console.log(error) 
      },
      () => { this.calendarOptions.events = aItensEvnt; }
      );
  }
  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    //const { calendarOptions } = this;
    //calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    //const title = prompt('Please enter a new title for your event');
    //const calendarApi = selectInfo.view.calendar;

    //calendarApi.unselect(); // clear date selection

   /* if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
      console.log(selectInfo)
    } */
  }

    

  handleEventClick(clickInfo: EventClickArg) {
    //if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //  clickInfo.event.remove();
   // }
    console.log(this.handleEventClick.call(PedComponent))
    
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
  
}

