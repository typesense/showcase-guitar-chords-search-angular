import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteHitsComponent } from './infinite-hits.component';

describe('InfiniteHitsComponent', () => {
  let component: InfiniteHitsComponent;
  let fixture: ComponentFixture<InfiniteHitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteHitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
