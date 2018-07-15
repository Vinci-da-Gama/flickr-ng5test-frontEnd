import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
	let lService: LoaderService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LoaderService]
		});
		lService = TestBed.get(LoaderService);
	});

	it('should be created', () => {
		expect(lService).toBeTruthy();
	});

});
