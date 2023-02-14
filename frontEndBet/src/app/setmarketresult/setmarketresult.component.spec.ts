import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmarketresultComponent } from './setmarketresult.component';

describe('SetmarketresultComponent', () => {
  let component: SetmarketresultComponent;
  let fixture: ComponentFixture<SetmarketresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetmarketresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetmarketresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
