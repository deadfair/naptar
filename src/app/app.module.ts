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
import { DatepickerAllMonthComponent } from './datepicker-all-month/datepicker-all-month.component';
import { EventsViewComponent } from './events-view/events-view.component';
import { DatePipe } from '@angular/common'


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
  //momentPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    DatepickerMonthComponent,
    CalendarComponent,
    DatepickerMonthHeaderComponent,
    DatepickerAllMonthComponent,
    EventsViewComponent
  ],
  imports: [
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
