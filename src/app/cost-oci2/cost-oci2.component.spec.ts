import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostOci2Component } from './cost-oci2.component';

describe('CostOci2Component', () => {
  let component: CostOci2Component;
  let fixture: ComponentFixture<CostOci2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostOci2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostOci2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
