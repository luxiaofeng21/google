import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlinksComponent } from './productlinks.component';

describe('ProductlinksComponent', () => {
  let component: ProductlinksComponent;
  let fixture: ComponentFixture<ProductlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
