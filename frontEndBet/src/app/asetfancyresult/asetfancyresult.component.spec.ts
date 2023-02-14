import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsetfancyresultComponent } from './asetfancyresult.component';

describe('AsetfancyresultComponent', () => {
  let component: AsetfancyresultComponent;
  let fixture: ComponentFixture<AsetfancyresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsetfancyresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsetfancyresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
