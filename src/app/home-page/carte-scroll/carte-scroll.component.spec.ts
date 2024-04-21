import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteScrollComponent } from './carte-scroll.component';

describe('CarteScrollComponent', () => {
  let component: CarteScrollComponent;
  let fixture: ComponentFixture<CarteScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteScrollComponent]
    });
    fixture = TestBed.createComponent(CarteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
