import { TestBed } from '@angular/core/testing';

import { SidLibraryNgService } from './sid-library-ng.service';

describe('SidLibraryNgService', () => {
  let service: SidLibraryNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidLibraryNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
