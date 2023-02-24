import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWebsiteSettingComponent } from './add-website-setting.component';

describe('AddWebsiteSettingComponent', () => {
  let component: AddWebsiteSettingComponent;
  let fixture: ComponentFixture<AddWebsiteSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWebsiteSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWebsiteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
