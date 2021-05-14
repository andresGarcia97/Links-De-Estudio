import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilesComponent } from './agiles.component';

describe('AgilesComponent', () => {
  let component: AgilesComponent;
  let fixture: ComponentFixture<AgilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
