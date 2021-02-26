import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountaccessComponent } from './accountaccess.component';

describe('AccountaccessComponent', () => {
  let component: AccountaccessComponent;
  let fixture: ComponentFixture<AccountaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
