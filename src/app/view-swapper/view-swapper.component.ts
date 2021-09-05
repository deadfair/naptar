import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-view-swapper',
  templateUrl: './view-swapper.component.html',
  styleUrls: ['./view-swapper.component.scss']
})
export class ViewSwapperComponent implements OnInit {
  @Output() selectedYear = new EventEmitter<number>();
  @Output() selectedMode = new EventEmitter<string>();

  @Input() years:number[]=[2010,2011,2020,2021];
  constructor() { }
  panel='year-select-panel';
  defaultSelectedValue:number|null=null;
  buttonFocused=false;

  ngOnInit(): void {
    this.selectedMode.emit("Month");
    let nowYear=Number(new Date().getFullYear());
    if (this.years.includes(nowYear)){
      this.defaultSelectedValue=nowYear;
    } else {
      this.defaultSelectedValue=this.years[Math.floor(this.years.length/2)];
    }
    this.selectedYear.emit(this.defaultSelectedValue);
  }

  selectedYearChange(year:any){
    this.selectedYear.emit(year.option.value);
    this.defaultSelectedValue=year.option.value;
  }

  modevalueChange(mode:any){
    this.selectedMode.emit(mode.value)
  }
}
