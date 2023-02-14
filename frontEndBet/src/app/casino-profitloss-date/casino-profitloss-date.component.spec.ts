import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoProfitlossDateComponent } from './casino-profitloss-date.component';

describe('CasinoProfitlossDateComponent', () => {
  let component: CasinoProfitlossDateComponent;
  let fixture: ComponentFixture<CasinoProfitlossDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoProfitlossDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoProfitlossDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
