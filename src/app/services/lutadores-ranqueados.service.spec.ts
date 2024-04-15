import { TestBed } from '@angular/core/testing';

import { LutadoresService } from './lutadores-ranqueados.service';

describe('LutadoresService', () => {
  let service: LutadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LutadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
