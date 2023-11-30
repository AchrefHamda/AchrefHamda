import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSLComponent } from './fsl.component';

describe('FSLComponent', () => {
  let component: FSLComponent;
  let fixture: ComponentFixture<FSLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FSLComponent]
    });
    fixture = TestBed.createComponent(FSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
