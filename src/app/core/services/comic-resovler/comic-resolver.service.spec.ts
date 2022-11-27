import { TestBed } from '@angular/core/testing';

import { ComicResolverService } from './comic-resolver.service';

describe('ComicResolverService', () => {
  let service: ComicResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
