import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadrBoardComponent } from './leadr-board.component';

describe('LeadrBoardComponent', () => {
  let component: LeadrBoardComponent;
  let fixture: ComponentFixture<LeadrBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadrBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadrBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
