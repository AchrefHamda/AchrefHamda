import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp1Component } from './tp1.component';

describe('Tp1Component', () => {
  let component: Tp1Component;
  let fixture: ComponentFixture<Tp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp1Component]
    });
    fixture = TestBed.createComponent(Tp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
