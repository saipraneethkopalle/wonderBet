import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendedmarketResultComponent } from './suspendedmarket-result.component';

describe('SuspendedmarketResultComponent', () => {
  let component: SuspendedmarketResultComponent;
  let fixture: ComponentFixture<SuspendedmarketResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspendedmarketResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspendedmarketResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
