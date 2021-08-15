import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { StepperComponent } from './stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // a plugin!
//import momentPlugin from '@fullcalendar/moment'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { DatepickerMonthComponent } from './datepicker-month/datepicker-month.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { CalendarComponent } from './calendar/calendar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DatepickerMonthHeaderComponent } from './datepicker-month/datepicker-month-header/datepicker-month-header.component';
import { EventsViewComponent } from './events-view/events-view.component';
import { DatePipe } from '@angular/common';
import { DatepickerMultipleViewComponent } from './datepicker-multiple-view/datepicker-multiple-view.component'
import {MatSelectModule} from '@angular/material/select';
import { YearViewComponent } from './year-view/year-view.component';
import timeGridPlugin from '@fullcalendar/timegrid'
//import resourceTimelinePlugin  from '@fullcalendar/resource-timeline'
import { Calendar } from '@fullcalendar/core';
import { EventWindowComponent } from './event-window/event-window.component';
import { HttpClientModule } from '@angular/common/http';
import { MoreEventWindowComponent } from './more-event-window/more-event-window.component';
import { DeleteEventComponent } from './delete/delete-event/delete-event.component';
import { ArrowComponent } from './miniComponents/arrow/arrow.component';
import { MainCalendarComponent } from './main-calendar/main-calendar.component';
import { ViewSwapperComponent } from './view-swapper/view-swapper.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MiniMonthPickerComponent } from './mini-month-picker/mini-month-picker.component';
import { FullcalendarDayViewComponent } from './fullcalendar-day-view/fullcalendar-day-view.component';
import { FullcalendarWeekViewComponent } from './fullcalendar-week-view/fullcalendar-week-view.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  //momentPlugin
  timeGridPlugin,
  //resourceTimelinePlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    DatepickerMonthComponent,
    CalendarComponent,
    DatepickerMonthHeaderComponent,
    EventsViewComponent,
    DatepickerMultipleViewComponent,
    YearViewComponent,
    EventWindowComponent,
    MoreEventWindowComponent,
    DeleteEventComponent,
    ArrowComponent,
    MainCalendarComponent,
    ViewSwapperComponent,
    MiniMonthPickerComponent,
    FullcalendarDayViewComponent,
    FullcalendarWeekViewComponent,
  ],
  imports: [
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
