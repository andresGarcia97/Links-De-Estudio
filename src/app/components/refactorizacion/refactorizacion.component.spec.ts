import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactorizacionComponent } from './refactorizacion.component';

describe('RefactorizacionComponent', () => {
  let component: RefactorizacionComponent;
  let fixture: ComponentFixture<RefactorizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefactorizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefactorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
