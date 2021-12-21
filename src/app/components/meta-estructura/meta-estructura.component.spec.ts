import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaEstructuraComponent } from './meta-estructura.component';

describe('MetaEstructuraComponent', () => {
  let component: MetaEstructuraComponent;
  let fixture: ComponentFixture<MetaEstructuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaEstructuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaEstructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
