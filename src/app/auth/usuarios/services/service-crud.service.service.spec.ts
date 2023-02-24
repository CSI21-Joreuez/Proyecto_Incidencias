import { TestBed } from '@angular/core/testing';

import { ServiceCrudServiceService } from './service-crud.service.service';

describe('ServiceCrudServiceService', () => {
  let service: ServiceCrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
