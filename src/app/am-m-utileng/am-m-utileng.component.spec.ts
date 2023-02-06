import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmMUtilengComponent } from './am-m-utileng.component';

describe('AmMUtilengComponent', () => {
  let component: AmMUtilengComponent;
  let fixture: ComponentFixture<AmMUtilengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmMUtilengComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmMUtilengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
