import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisComponent } from './analisis.component';

describe('AnalisisComponent', () => {
  let component: AnalisisComponent;
  let fixture: ComponentFixture<AnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
