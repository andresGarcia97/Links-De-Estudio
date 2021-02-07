import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitecturasComponent } from './arquitecturas.component';

describe('ArquitecturasComponent', () => {
  let component: ArquitecturasComponent;
  let fixture: ComponentFixture<ArquitecturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquitecturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquitecturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
