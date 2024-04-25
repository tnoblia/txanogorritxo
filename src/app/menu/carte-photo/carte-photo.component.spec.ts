import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartePhotoComponent } from './carte-photo.component';

describe('CartePhotoComponent', () => {
  let component: CartePhotoComponent;
  let fixture: ComponentFixture<CartePhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartePhotoComponent]
    });
    fixture = TestBed.createComponent(CartePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
