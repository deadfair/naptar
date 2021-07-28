import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='naptar';
  selectedDate:Date|null=null;
  selectedDateInit(date:Date|null){
    this.selectedDate=date;
    console.log(this.selectedDate);
  }
}
