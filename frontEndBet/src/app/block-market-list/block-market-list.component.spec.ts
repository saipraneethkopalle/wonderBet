import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMarketListComponent } from './block-market-list.component';

describe('BlockMarketListComponent', () => {
  let component: BlockMarketListComponent;
  let fixture: ComponentFixture<BlockMarketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockMarketListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockMarketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
