import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiasDesarrolloComponent } from './estrategias-desarrollo.component';

describe('EstrategiasDesarrolloComponent', () => {
  let component: EstrategiasDesarrolloComponent;
  let fixture: ComponentFixture<EstrategiasDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrategiasDesarrolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrategiasDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
