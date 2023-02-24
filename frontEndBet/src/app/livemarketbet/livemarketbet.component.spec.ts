import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivemarketbetComponent } from './livemarketbet.component';

describe('LivemarketbetComponent', () => {
  let component: LivemarketbetComponent;
  let fixture: ComponentFixture<LivemarketbetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivemarketbetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivemarketbetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
