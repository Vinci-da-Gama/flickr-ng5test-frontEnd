import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LoaderService } from '../../../services/loader/loader.service';
import * as fromTextReducer from '../../../store/text-store/text-reducer';
import * as fromAppReducer from '../../../store/app-store/app.reducers';
import * as imgsActions from '../../../store/imgs-store/imgs-actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	searchForm: FormGroup;
	searchTermInput: FormControl;
	private ALLWHITESPACE = /\S/;
	staticTextState: Observable<fromTextReducer.TextState>;
	isSHowLoader: Boolean = false;

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
}
