import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatBetComponent } from './cheat-bet.component';

describe('CheatBetComponent', () => {
  let component: CheatBetComponent;
  let fixture: ComponentFixture<CheatBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheatBetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheatBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
