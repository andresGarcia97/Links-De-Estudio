import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaUsuarioComponent } from './historia-usuario.component';

describe('HistoriaUsuarioComponent', () => {
  let component: HistoriaUsuarioComponent;
  let fixture: ComponentFixture<HistoriaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
