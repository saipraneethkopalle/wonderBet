import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AupdateFancyStatusComponent } from './aupdate-fancy-status.component';

describe('AupdateFancyStatusComponent', () => {
  let component: AupdateFancyStatusComponent;
  let fixture: ComponentFixture<AupdateFancyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AupdateFancyStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AupdateFancyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
