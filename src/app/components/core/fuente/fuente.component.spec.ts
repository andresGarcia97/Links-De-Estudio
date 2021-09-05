import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuenteComponent } from './fuente.component';

describe('FuenteComponent', () => {
  let component: FuenteComponent;
  let fixture: ComponentFixture<FuenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
