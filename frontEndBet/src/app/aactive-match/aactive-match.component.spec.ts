import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AactiveMatchComponent } from './aactive-match.component';

describe('AactiveMatchComponent', () => {
  let component: AactiveMatchComponent;
  let fixture: ComponentFixture<AactiveMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AactiveMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AactiveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
