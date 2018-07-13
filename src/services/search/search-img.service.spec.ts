import { TestBed, inject } from '@angular/core/testing';

import { SearchImgsService } from './search-img.service';

describe('SearchImgsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [SearchImgsService]
		});
	});

	it('should be created', inject([SearchImgsService], (service: SearchImgsService) => {
		expect(service).toBeTruthy();
	}));
});
