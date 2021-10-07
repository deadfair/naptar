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
import { MatNativeDateModule } from '@angular/material/core';
import { DatepickerMonthHeaderComponent } from './datepicker-month/datepicker-month-header/datepicker-month-header.component';
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
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { GetEventsByDayComponent } from './get-events-by-day/get-events-by-day.component';
import { EventsViewSectionComponent } from './events-view-section/events-view-section.component';
import { environment } from '../environments/environment'; // Angular CLI environment

//import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    DatepickerMonthHeaderComponent,
    DatepickerMultipleViewComponent,
    YearViewComponent,
    EventWindowComponent,
    MoreEventWindowComponent,
    DeleteEventComponent,
    ArrowComponent,
    MainCalendarComponent,
    ViewSwapperComponent,
    MiniMonthPickerComponent,
    FullcalendarComponent,
    GetEventsByDayComponent,
    EventsViewSectionComponent,
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
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({logOnly:environment.production,}),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
