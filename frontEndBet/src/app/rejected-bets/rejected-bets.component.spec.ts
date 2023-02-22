import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedBetsComponent } from './rejected-bets.component';

describe('RejectedBetsComponent', () => {
  let component: RejectedBetsComponent;
  let fixture: ComponentFixture<RejectedBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedBetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
