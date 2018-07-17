import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/throttleTime';

import { LoaderService } from '../../../services/loader/loader.service';
import * as fromTextReducer from '../../../store/text-store/text-reducer';
import * as fromAppReducer from '../../../store/app-store/app.reducers';
import * as imgsActions from '../../../store/imgs-store/imgs-actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

	searchForm: FormGroup;
	private ALLWHITESPACE = /\S/;
	staticTextState: Observable<fromTextReducer.TextState>;
	isSHowLoader: Boolean = false;

	searchTerm: null = null;
	searchTermInput: FormControl = new FormControl();
	searchCtrlStub: Subscription;

	constructor(
		private _fbr: FormBuilder,
		private loaderService: LoaderService,
		private store: Store<fromAppReducer.AppState>
	) { }

	ngOnInit() {
		this.createSearchFormControl();
		this.createSearchFormGroup();
		this.staticTextState = this.store.select('text');
		this.loaderService.weatherShowLoader.subscribe((isSHowLoader: Boolean) => {
			this.isSHowLoader = isSHowLoader;
		});
		this.searchCtrlStub = this.searchTermInput.valueChanges
			.debounceTime(1000)
			.distinctUntilChanged()
			.subscribe( (newTerm) => {
				/* if (!newTerm || !this.ALLWHITESPACE.test(newTerm)) {
					return;
				} else {
					this.loaderService.weatherShowLoader.next(true);
					this.store.dispatch(new imgsActions.SearchImages(newTerm));
					this.searchForm.reset();
				} */
				this.loaderService.weatherShowLoader.next(true);
				this.store.dispatch(new imgsActions.SearchImages(newTerm));
				this.searchForm.reset();
			});
	}

	private createSearchFormControl() {
		const initTerm = null;
		const validatorArr = [Validators.required, Validators.pattern(this.ALLWHITESPACE)];
		this.searchTermInput = new FormControl(initTerm, validatorArr);
	}

	private createSearchFormGroup() {
		this.searchForm = this._fbr.group({
			'searchTermInput': this.searchTermInput
		});
	}

	onSubmit(f: FormGroup) {
		this.loaderService.weatherShowLoader.next(true);
		const term = f.value.searchTermInput;
		this.store.dispatch(new imgsActions.SearchImages(term));
		this.searchForm.reset();
	}

	ngOnDestroy() {
		this.searchCtrlStub.unsubscribe();
	}
}
