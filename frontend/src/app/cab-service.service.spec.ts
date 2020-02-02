import { TestBed } from '@angular/core/testing';

import { CabService } from './cab.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";


describe('CabService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: CabService = TestBed.get(CabService);
    expect(service).toBeTruthy();
  });
});
