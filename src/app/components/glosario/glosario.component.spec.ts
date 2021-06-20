import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlosarioComponent } from './glosario.component';

describe('GlosarioComponent', () => {
  let component: GlosarioComponent;
  let fixture: ComponentFixture<GlosarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlosarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlosarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
