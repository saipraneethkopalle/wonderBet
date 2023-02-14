import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketProfitlossComponent } from './market-profitloss.component';

describe('MarketProfitlossComponent', () => {
  let component: MarketProfitlossComponent;
  let fixture: ComponentFixture<MarketProfitlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketProfitlossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketProfitlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
