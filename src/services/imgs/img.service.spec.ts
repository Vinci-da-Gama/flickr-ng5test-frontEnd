import { TestBed, inject } from '@angular/core/testing';

import { ImgsService } from './img.service';

describe('ImgsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ImgsService]
		});
	});

	it('should be created', inject([ImgsService], (service: ImgsService) => {
		expect(service).toBeTruthy();
	}));
});
