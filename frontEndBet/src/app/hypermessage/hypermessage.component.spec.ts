import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypermessageComponent } from './hypermessage.component';

describe('HypermessageComponent', () => {
  let component: HypermessageComponent;
  let fixture: ComponentFixture<HypermessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HypermessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HypermessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
