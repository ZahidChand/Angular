import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDeleteComponent } from './leads-delete.component';

describe('LeadsDeleteComponent', () => {
  let component: LeadsDeleteComponent;
  let fixture: ComponentFixture<LeadsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
