import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuentesComponent } from './fuentes.component';

describe('FuentesComponent', () => {
  let component: FuentesComponent;
  let fixture: ComponentFixture<FuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
