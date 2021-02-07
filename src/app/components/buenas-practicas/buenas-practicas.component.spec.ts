import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenasPracticasComponent } from './buenas-practicas.component';

describe('BuenasPracticasComponent', () => {
  let component: BuenasPracticasComponent;
  let fixture: ComponentFixture<BuenasPracticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuenasPracticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuenasPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
