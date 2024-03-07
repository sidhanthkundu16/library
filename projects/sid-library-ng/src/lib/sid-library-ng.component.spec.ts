import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidLibraryNgComponent } from './sid-library-ng.component';

describe('SidLibraryNgComponent', () => {
  let component: SidLibraryNgComponent;
  let fixture: ComponentFixture<SidLibraryNgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidLibraryNgComponent]
    });
    fixture = TestBed.createComponent(SidLibraryNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
