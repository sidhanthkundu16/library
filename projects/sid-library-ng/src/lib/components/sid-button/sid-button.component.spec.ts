import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidButtonComponent } from './sid-button.component';

describe('SidButtonComponent', () => {
  let component: SidButtonComponent;
  let fixture: ComponentFixture<SidButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidButtonComponent]
    });
    fixture = TestBed.createComponent(SidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
