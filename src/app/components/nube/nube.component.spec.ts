import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NubeComponent } from './nube.component';

describe('NubeComponent', () => {
  let component: NubeComponent;
  let fixture: ComponentFixture<NubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
