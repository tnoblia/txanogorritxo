import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteScrollProducteursComponent } from './carte-scroll-producteurs.component';

describe('CarteScrollProducteursComponent', () => {
  let component: CarteScrollProducteursComponent;
  let fixture: ComponentFixture<CarteScrollProducteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteScrollProducteursComponent]
    });
    fixture = TestBed.createComponent(CarteScrollProducteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
