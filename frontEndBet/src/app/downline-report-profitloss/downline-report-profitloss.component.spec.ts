import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlineReportProfitlossComponent } from './downline-report-profitloss.component';

describe('DownlineReportProfitlossComponent', () => {
  let component: DownlineReportProfitlossComponent;
  let fixture: ComponentFixture<DownlineReportProfitlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownlineReportProfitlossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownlineReportProfitlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
