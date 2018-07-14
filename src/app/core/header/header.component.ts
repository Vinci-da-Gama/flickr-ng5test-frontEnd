// import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SearchImgsService } from '../../../services/search/search-img.service';
import * as fromTextReducer from '../../../store/text-store/text-reducer';
import * as fromAppReducer from '../../../store/app-store/app.reducers';

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

	constructor(
		private _fbr: FormBuilder,
		private siService: SearchImgsService,
		private tStore: Store<fromAppReducer.AppState>
	) { }

	ngOnInit() {
		this.createSearchFormControl();
		this.createSearchFormGroup();
		this.staticTextState = this.tStore.select('text');
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

	onSubmit() {

	}
}
