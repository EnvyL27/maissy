import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostFsbComponent } from './cost-fsb.component';

describe('CostFsbComponent', () => {
  let component: CostFsbComponent;
  let fixture: ComponentFixture<CostFsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostFsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostFsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
