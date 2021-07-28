import { Component, OnInit,  ChangeDetectionStrategy, Input, Output,EventEmitter} from '@angular/core';
import{DatepickerMonthHeaderComponent} from'./datepicker-month-header/datepicker-month-header.component';

@Component({
  selector: 'app-datepicker-month',
  templateUrl: './datepicker-month.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./datepicker-month.component.scss']
})
export class DatepickerMonthComponent implements OnInit {
  @Input() startAt:string="";
  @Output() selectedDate = new EventEmitter<Date | null>();
  constructor() { }
  datepickerMonthComponent=DatepickerMonthHeaderComponent;
  ngOnInit(): void {
  }

  selectChange(value:Date|null){
    this.selectedDate.emit(value);
  }

}
