import { TestBed, inject } from '@angular/core/testing';

import { ImgsEffectsService } from './imgs-effects.service';

describe('ImgsEffectsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ImgsEffectsService]
		});
	});

	it('should be created', inject([ImgsEffectsService], (service: ImgsEffectsService) => {
		expect(service).toBeTruthy();
	}));
});
