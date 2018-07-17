import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/env-const';
import { DataInterface } from '../../contracts/interfaces/data-interface';

@Injectable()
export class ImgsService {

	private urlPrefix: string = environment.urlPrefix;

	constructor(
		private httpCli: HttpClient
	) {}

	fetchInitialImages() {
		const url: string = (`${environment.urlPrefix}/publicseed`).toString();
		return this.httpCli.get<DataInterface>(url, {
			observe: 'body',
			responseType: 'json'
		})
		.catch(this.errorHandler);
	}

	searchByTerm(text: string) {
		const url: string = (`${environment.urlPrefix}/search/${text}`).toString();
		return this.httpCli.get<DataInterface>(url, {
			observe: 'body',
			responseType: 'json'
		})
		.catch(this.errorHandler);
	}

	private errorHandler(err: HttpErrorResponse) {
		const errMsg = err.message || 'Server Error';
		return Observable.throw(errMsg);
	}
}
