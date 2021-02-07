import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlNosqlComponent } from './sql-nosql.component';

describe('SqlNosqlComponent', () => {
  let component: SqlNosqlComponent;
  let fixture: ComponentFixture<SqlNosqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlNosqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlNosqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
