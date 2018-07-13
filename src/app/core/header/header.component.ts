// import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

	searchForm: FormGroup;
	searchTermInput: FormControl;

	constructor(
		private _fbr: FormBuilder,
	) { }

	ngOnInit() {
	}
}
