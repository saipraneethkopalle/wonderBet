import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendedfancyResultComponent } from './suspendedfancy-result.component';

describe('SuspendedfancyResultComponent', () => {
  let component: SuspendedfancyResultComponent;
  let fixture: ComponentFixture<SuspendedfancyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspendedfancyResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspendedfancyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
