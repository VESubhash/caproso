import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateCreateComponent } from './estimate-detail.component';

describe('EstimateDataComponent', () => {
  let component: EstimateCreateComponent;
  let fixture: ComponentFixture<EstimateCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
