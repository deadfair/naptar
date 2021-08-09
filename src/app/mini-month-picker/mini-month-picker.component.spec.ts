import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMonthPickerComponent } from './mini-month-picker.component';

describe('MiniMonthPickerComponent', () => {
  let component: MiniMonthPickerComponent;
  let fixture: ComponentFixture<MiniMonthPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniMonthPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniMonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
