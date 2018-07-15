import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundPageComponent } from './notfound-page.component';
import { ActivatedRoute, Data } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotfoundPageComponent', () => {
	let component: NotfoundPageComponent;
	let fixture: ComponentFixture<NotfoundPageComponent>;

	beforeEach(async (() => {
		TestBed.configureTestingModule({
			declarations: [NotfoundPageComponent],
			imports: [
				RouterTestingModule
			],
			providers: [{
				provide: ActivatedRoute,
				useValue: {
					data: {
						// https://gist.github.com/benjamincharity/3d25cd2c95b6ecffadb18c3d4dbbd80b
						subscribe: (fn: (value: Data) => void) => fn({
							message: 'Page not found.'
						})
					}
				}
			}]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotfoundPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create NotFound Component', () => {
		expect(component).toBeTruthy();
	});

	// https://github.com/angular/angular/issues/15779

});
