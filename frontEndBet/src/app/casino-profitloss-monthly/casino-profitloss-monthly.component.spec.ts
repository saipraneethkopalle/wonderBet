import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoProfitlossMonthlyComponent } from './casino-profitloss-monthly.component';

describe('CasinoProfitlossMonthlyComponent', () => {
  let component: CasinoProfitlossMonthlyComponent;
  let fixture: ComponentFixture<CasinoProfitlossMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoProfitlossMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoProfitlossMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
