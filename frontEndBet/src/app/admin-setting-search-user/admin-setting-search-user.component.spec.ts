import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingSearchUserComponent } from './admin-setting-search-user.component';

describe('AdminSettingSearchUserComponent', () => {
  let component: AdminSettingSearchUserComponent;
  let fixture: ComponentFixture<AdminSettingSearchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingSearchUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSettingSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
