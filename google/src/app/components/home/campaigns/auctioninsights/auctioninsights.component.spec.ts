import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctioninsightsComponent } from './auctioninsights.component';

describe('AuctioninsightsComponent', () => {
  let component: AuctioninsightsComponent;
  let fixture: ComponentFixture<AuctioninsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctioninsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctioninsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
