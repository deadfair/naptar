import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreEventWindowComponent } from './more-event-window.component';

describe('MoreEventWindowComponent', () => {
  let component: MoreEventWindowComponent;
  let fixture: ComponentFixture<MoreEventWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreEventWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreEventWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
