import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummryComponent } from './account-summry.component';

describe('AccountSummryComponent', () => {
  let component: AccountSummryComponent;
  let fixture: ComponentFixture<AccountSummryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSummryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSummryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
