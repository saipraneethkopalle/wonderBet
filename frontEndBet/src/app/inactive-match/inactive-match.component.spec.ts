import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveMatchComponent } from './inactive-match.component';

describe('InactiveMatchComponent', () => {
  let component: InactiveMatchComponent;
  let fixture: ComponentFixture<InactiveMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
