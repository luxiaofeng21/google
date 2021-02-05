import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdextensionsComponent } from './adextensions.component';

describe('AdextensionsComponent', () => {
  let component: AdextensionsComponent;
  let fixture: ComponentFixture<AdextensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdextensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdextensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
