import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaClientComponent } from './pizza-client.component';

describe('PizzaClientComponent', () => {
  let component: PizzaClientComponent;
  let fixture: ComponentFixture<PizzaClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
