import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingtransfersComponent } from './billingtransfers.component';

describe('BillingtransfersComponent', () => {
  let component: BillingtransfersComponent;
  let fixture: ComponentFixture<BillingtransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingtransfersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingtransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
