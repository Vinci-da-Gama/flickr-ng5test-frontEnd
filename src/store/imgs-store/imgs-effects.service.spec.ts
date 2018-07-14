import { TestBed, inject } from '@angular/core/testing';

import { ImgsEffects } from './imgs-effects.service';

describe('ImgsEffects', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ImgsEffects]
		});
	});

	it('should be created', inject([ImgsEffects], (service: ImgsEffects) => {
		expect(service).toBeTruthy();
	}));
});
