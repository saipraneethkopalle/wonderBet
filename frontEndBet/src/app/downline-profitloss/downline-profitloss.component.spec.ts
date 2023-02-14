import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlineProfitlossComponent } from './downline-profitloss.component';

describe('DownlineProfitlossComponent', () => {
  let component: DownlineProfitlossComponent;
  let fixture: ComponentFixture<DownlineProfitlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownlineProfitlossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownlineProfitlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
