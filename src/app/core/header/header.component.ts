// import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

	searchForm: FormGroup;
	searchTermInput: FormControl;
	private ALLWHITESPACE = /\S/;

	constructor(
		private _fbr: FormBuilder,
	) { }

	ngOnInit() {
		this.createSearchFormControl();
		this.createSearchFormGroup();
	}

	private createSearchFormControl() {
		const initTerm = null;
		const validatorArr = [Validators.required, Validators.pattern(this.ALLWHITESPACE)];
		this.searchTermInput = new FormControl(initTerm, validatorArr);
	}

	private createSearchFormGroup() {
		this.searchForm = new FormGroup({
			'searchTermInput': this.searchTermInput
		});
	}

	onSubmit() {

	}
}
