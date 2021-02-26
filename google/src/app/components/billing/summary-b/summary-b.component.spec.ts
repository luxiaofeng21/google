import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBComponent } from './summary-b.component';

describe('SummaryBComponent', () => {
  let component: SummaryBComponent;
  let fixture: ComponentFixture<SummaryBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
