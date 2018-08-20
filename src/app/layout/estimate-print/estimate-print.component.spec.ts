import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateCbdComponent } from './estimate-print.component';

describe('EstimateDataComponent', () => {
  let component: EstimateCbdComponent;
  let fixture: ComponentFixture<EstimateCbdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateCbdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateCbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
