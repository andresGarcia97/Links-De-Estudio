import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilacionComponent } from './compilacion.component';

describe('CompilacionComponent', () => {
  let component: CompilacionComponent;
  let fixture: ComponentFixture<CompilacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
