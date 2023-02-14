import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsettingComponent } from './sportsetting.component';

describe('SportsettingComponent', () => {
  let component: SportsettingComponent;
  let fixture: ComponentFixture<SportsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
