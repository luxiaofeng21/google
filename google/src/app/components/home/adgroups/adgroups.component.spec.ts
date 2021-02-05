import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdgroupsComponent } from './adgroups.component';

describe('AdgroupsComponent', () => {
  let component: AdgroupsComponent;
  let fixture: ComponentFixture<AdgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdgroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
