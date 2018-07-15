import { TestBed } from '@angular/core/testing';

import { ImgsService } from './img.service';

describe('ImgsService', () => {
	let imgService: ImgsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ImgsService
			]
		});
		imgService = TestBed.get(imgService);
	});

	/* it('should be created', () => {
		expect(imgService).toBeTruthy();
	}); */
});
