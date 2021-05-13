import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdsComponent } from './productds.component';

describe('ProductdsComponent', () => {
  let component: ProductdsComponent;
  let fixture: ComponentFixture<ProductdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
