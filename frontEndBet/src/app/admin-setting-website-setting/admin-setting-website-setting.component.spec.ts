import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingWebsiteSettingComponent } from './admin-setting-website-setting.component';

describe('AdminSettingWebsiteSettingComponent', () => {
  let component: AdminSettingWebsiteSettingComponent;
  let fixture: ComponentFixture<AdminSettingWebsiteSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingWebsiteSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSettingWebsiteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
