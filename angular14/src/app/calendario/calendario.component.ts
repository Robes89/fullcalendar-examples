import {
  CalendarOptions,
  EventApi,
  EventInput,
  DateSelectArg,
  EventClickArg,
} from '@fullcalendar/core';
import { PedComponent } from '../pedi/pedi.component';
import { SupplierService } from './services/supplier.service';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  providers: [SupplierService],
})
export class CalendarioComponent implements OnInit {
  calendarVisible = true;
  testefin: string;
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: '',
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
  constructor(
    private changeDetector: ChangeDetectorRef,
    private oServices: SupplierService,
    private oRouter: Router,
    public oPoNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.addevento(this);
  }
  addevento(evento) {
    let aItensEvnt: EventInput[] = [];
    // console.log(this.oServices)
    this.oServices.getSupplierList().subscribe(
      (res) => {
        res.forEach((item) => {
          this.currentEvents.push(item);
          aItensEvnt.push(item);
        });
      },
      (error) => {
        console.log(error);
        this.oPoNotification.error(error); 
      },
      () => {
        this.calendarOptions.events = aItensEvnt;
      }
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
    let cdate = new Date(clickInfo.event._instance.range.end);
    let sdate =
      cdate.toLocaleString().substring(6, 10) +
      '_' +
      cdate.toLocaleString().substring(3, 5) +
      '_' +
      cdate.toLocaleString().substring(0, 2);

    //window.location.replace('/pedidos/'+this.testefin);
    
    this.oRouter.navigateByUrl('pedidos/' + sdate);
   
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}
