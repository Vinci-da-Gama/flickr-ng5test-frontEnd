import { TestBed, inject } from '@angular/core/testing';

import { InitPhotosResolveService } from './init-photos-resolve.service';

describe('InitPhotosResolveService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [InitPhotosResolveService]
		});
	});

	it('should be created', inject([InitPhotosResolveService], (service: InitPhotosResolveService) => {
		expect(service).toBeTruthy();
	}));
});
