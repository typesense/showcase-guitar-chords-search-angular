import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndFilterComponent } from './search-and-filter.component';

describe('SearchAndFilterComponent', () => {
  let component: SearchAndFilterComponent;
  let fixture: ComponentFixture<SearchAndFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAndFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
