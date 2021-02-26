import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyauctioninsightsComponent } from './keyauctioninsights.component';

describe('KeyauctioninsightsComponent', () => {
  let component: KeyauctioninsightsComponent;
  let fixture: ComponentFixture<KeyauctioninsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyauctioninsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyauctioninsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
