import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasAvanzadasComponent } from './pruebas-avanzadas.component';

describe('PruebasAvanzadasComponent', () => {
  let component: PruebasAvanzadasComponent;
  let fixture: ComponentFixture<PruebasAvanzadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasAvanzadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasAvanzadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
