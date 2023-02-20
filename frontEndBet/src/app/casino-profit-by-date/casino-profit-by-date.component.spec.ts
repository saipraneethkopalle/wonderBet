import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoProfitByDateComponent } from './casino-profit-by-date.component';

describe('CasinoProfitByDateComponent', () => {
  let component: CasinoProfitByDateComponent;
  let fixture: ComponentFixture<CasinoProfitByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoProfitByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoProfitByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
