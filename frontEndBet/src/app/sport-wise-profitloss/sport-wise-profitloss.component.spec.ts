import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportWiseProfitlossComponent } from './sport-wise-profitloss.component';

describe('SportWiseProfitlossComponent', () => {
  let component: SportWiseProfitlossComponent;
  let fixture: ComponentFixture<SportWiseProfitlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportWiseProfitlossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportWiseProfitlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
