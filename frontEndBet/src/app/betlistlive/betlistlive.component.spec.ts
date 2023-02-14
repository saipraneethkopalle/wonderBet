import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetlistliveComponent } from './betlistlive.component';

describe('BetlistliveComponent', () => {
  let component: BetlistliveComponent;
  let fixture: ComponentFixture<BetlistliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetlistliveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetlistliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
