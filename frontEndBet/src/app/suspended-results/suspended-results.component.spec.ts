import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendedResultsComponent } from './suspended-results.component';

describe('SuspendedResultsComponent', () => {
  let component: SuspendedResultsComponent;
  let fixture: ComponentFixture<SuspendedResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspendedResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspendedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
