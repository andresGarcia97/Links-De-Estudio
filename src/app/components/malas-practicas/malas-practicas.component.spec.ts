import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalasPracticasComponent } from './malas-practicas.component';

describe('MalasPracticasComponent', () => {
  let component: MalasPracticasComponent;
  let fixture: ComponentFixture<MalasPracticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalasPracticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalasPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
