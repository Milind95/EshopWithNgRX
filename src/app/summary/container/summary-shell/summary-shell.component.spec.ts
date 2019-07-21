import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryShellComponent } from './summary-shell.component';

describe('SummaryShellComponent', () => {
  let component: SummaryShellComponent;
  let fixture: ComponentFixture<SummaryShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
