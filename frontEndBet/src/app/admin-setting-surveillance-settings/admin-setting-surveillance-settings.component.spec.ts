import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingSurveillanceSettingsComponent } from './admin-setting-surveillance-settings.component';

describe('AdminSettingSurveillanceSettingsComponent', () => {
  let component: AdminSettingSurveillanceSettingsComponent;
  let fixture: ComponentFixture<AdminSettingSurveillanceSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingSurveillanceSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSettingSurveillanceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
