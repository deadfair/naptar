import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-datepicker-multiple-view',
  templateUrl: './datepicker-multiple-view.component.html',
  styleUrls: ['./datepicker-multiple-view.component.scss']
})
export class DatepickerMultipleViewComponent implements OnInit {
  @Output() selectedYear = new EventEmitter<number>();
  @Input() years:number[]=[];
  constructor() { }
  defaultSelectedValue:number|null=null;
  ngOnInit(): void {
    this.defaultSelectedValue=this.years[0];
    this.selectedYear.emit(this.defaultSelectedValue);
  }

  selectedYearChange(year:any){
    this.selectedYear.emit(year.value);
  }

}
