import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBeforeComponent } from './button-before.component';

describe('ButtonBeforeComponent', () => {
  let component: ButtonBeforeComponent;
  let fixture: ComponentFixture<ButtonBeforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBeforeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
