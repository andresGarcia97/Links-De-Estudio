import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmellsCodesComponent } from './smells-codes.component';

describe('SmellsCodesComponent', () => {
  let component: SmellsCodesComponent;
  let fixture: ComponentFixture<SmellsCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmellsCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmellsCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
