import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiltComponent } from './cilt.component';

describe('CiltComponent', () => {
  let component: CiltComponent;
  let fixture: ComponentFixture<CiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
