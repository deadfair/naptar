import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSwapperComponent } from './view-swapper.component';

describe('ViewSwapperComponent', () => {
  let component: ViewSwapperComponent;
  let fixture: ComponentFixture<ViewSwapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSwapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSwapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
