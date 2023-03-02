import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingPLComponent } from './betting-pl.component';

describe('BettingPLComponent', () => {
  let component: BettingPLComponent;
  let fixture: ComponentFixture<BettingPLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingPLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BettingPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
