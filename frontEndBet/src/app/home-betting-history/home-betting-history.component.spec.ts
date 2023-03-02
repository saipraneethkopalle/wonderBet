import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBettingHistoryComponent } from './home-betting-history.component';

describe('HomeBettingHistoryComponent', () => {
  let component: HomeBettingHistoryComponent;
  let fixture: ComponentFixture<HomeBettingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBettingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBettingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
