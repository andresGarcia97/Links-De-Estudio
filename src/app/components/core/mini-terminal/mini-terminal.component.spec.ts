import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTerminalComponent } from './mini-terminal.component';

describe('MiniTerminalComponent', () => {
  let component: MiniTerminalComponent;
  let fixture: ComponentFixture<MiniTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
