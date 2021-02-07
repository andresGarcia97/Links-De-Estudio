import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadigmasComponent } from './paradigmas.component';

describe('ParadigmasComponent', () => {
  let component: ParadigmasComponent;
  let fixture: ComponentFixture<ParadigmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParadigmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadigmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
