import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateDataComponent } from './estimate-data.component';

describe('EstimateDataComponent', () => {
  let component: EstimateDataComponent;
  let fixture: ComponentFixture<EstimateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
