import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocimientosEmpiricosComponent } from './conocimientos-empiricos.component';

describe('ConocimientosEmpiricosComponent', () => {
  let component: ConocimientosEmpiricosComponent;
  let fixture: ComponentFixture<ConocimientosEmpiricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocimientosEmpiricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocimientosEmpiricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
