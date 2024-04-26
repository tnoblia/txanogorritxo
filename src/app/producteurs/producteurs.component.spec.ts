import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteursComponent } from './producteurs.component';

describe('ProducteursComponent', () => {
  let component: ProducteursComponent;
  let fixture: ComponentFixture<ProducteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducteursComponent]
    });
    fixture = TestBed.createComponent(ProducteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
