import { Component, OnInit ,Output,Input,EventEmitter,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss']
})
export class YearViewComponent implements OnInit {
  @Output() selectedDate = new EventEmitter<Date | null>();
  @Input() year:number=0;
  @Input() years:number[]=[];
  clickedDate:Date | null=null;
  constructor() { }
  ngOnInit(): void {
  }

  selectDate(date:Date | null){
    this.selectedDate.emit(date);
    this.clickedDate=date;
  }
}
