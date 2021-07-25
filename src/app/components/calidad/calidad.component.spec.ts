import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidadComponent } from './calidad.component';

describe('CalidadComponent', () => {
  let component: CalidadComponent;
  let fixture: ComponentFixture<CalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
