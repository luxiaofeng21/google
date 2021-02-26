import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagesComponent } from './landingpages.component';

describe('LandingpagesComponent', () => {
  let component: LandingpagesComponent;
  let fixture: ComponentFixture<LandingpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
