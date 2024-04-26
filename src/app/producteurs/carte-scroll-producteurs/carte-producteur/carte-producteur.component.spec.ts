import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteProducteurComponent } from './carte-producteur.component';

describe('CarteProducteurComponent', () => {
  let component: CarteProducteurComponent;
  let fixture: ComponentFixture<CarteProducteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteProducteurComponent]
    });
    fixture = TestBed.createComponent(CarteProducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
