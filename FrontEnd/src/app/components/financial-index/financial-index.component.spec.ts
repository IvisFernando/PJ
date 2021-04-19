import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialIndexComponent } from './financial-index.component';

describe('FinancialIndexComponent', () => {
  let component: FinancialIndexComponent;
  let fixture: ComponentFixture<FinancialIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
