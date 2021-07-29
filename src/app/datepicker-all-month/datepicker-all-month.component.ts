import { Component, OnInit ,Output,Input,EventEmitter,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-datepicker-all-month',
  templateUrl: './datepicker-all-month.component.html',
  styleUrls: ['./datepicker-all-month.component.scss']
})
export class DatepickerAllMonthComponent implements OnInit {
  @Output() selectedDate = new EventEmitter<Date | null>();
  @Input() year:number=0;
  @Input() years:number[]=[];
  constructor() { }
  ngOnInit(): void {
  }

  selectDate(date:Date | null){
    this.selectedDate.emit(date);
  }


}
