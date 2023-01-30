import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuroMarketingComponent } from './neuro-marketing.component';

describe('NeuroMarketingComponent', () => {
  let component: NeuroMarketingComponent;
  let fixture: ComponentFixture<NeuroMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuroMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuroMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
