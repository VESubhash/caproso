import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAffiliatesComponent } from './manage-affiliates.component';

describe('ManageAffiliatesComponent', () => {
  let component: ManageAffiliatesComponent;
  let fixture: ComponentFixture<ManageAffiliatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAffiliatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
