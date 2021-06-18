import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaCaracteristicasComponent } from './meta-caracteristicas.component';

describe('MetaCaracteristicasComponent', () => {
  let component: MetaCaracteristicasComponent;
  let fixture: ComponentFixture<MetaCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaCaracteristicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
