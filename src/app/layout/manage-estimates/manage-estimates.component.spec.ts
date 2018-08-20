import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEstimatesComponent } from './manage-estimates.component';

describe('ManageItemsComponent', () => {
  let component: ManageEstimatesComponent;
  let fixture: ComponentFixture<ManageEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
