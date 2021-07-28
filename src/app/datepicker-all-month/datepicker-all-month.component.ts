import { Component, OnInit ,Output,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-datepicker-all-month',
  templateUrl: './datepicker-all-month.component.html',
  styleUrls: ['./datepicker-all-month.component.scss']
})
export class DatepickerAllMonthComponent implements OnInit {
  @Output() selectedDate = new EventEmitter<Date | null>();
  @Input() year:string="";
  constructor() { }

  ngOnInit(): void {
  }

  selectDate(date:Date | null){
    this.selectedDate.emit(date);
  }

}
