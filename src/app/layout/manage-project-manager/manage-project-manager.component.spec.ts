import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectManagerComponent } from './manage-project-manager.component';

describe('ManageItemsComponent', () => {
  let component: ManageProjectManagerComponent;
  let fixture: ComponentFixture<ManageProjectManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProjectManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
