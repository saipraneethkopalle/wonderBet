import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrematchplComponent } from './prematchpl.component';

describe('PrematchplComponent', () => {
  let component: PrematchplComponent;
  let fixture: ComponentFixture<PrematchplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrematchplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrematchplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
