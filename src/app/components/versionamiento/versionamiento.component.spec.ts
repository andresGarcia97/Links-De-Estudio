import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionamientoComponent } from './versionamiento.component';

describe('VersionamientoComponent', () => {
  let component: VersionamientoComponent;
  let fixture: ComponentFixture<VersionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
