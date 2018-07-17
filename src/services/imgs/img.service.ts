import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { LoaderService } from '../loader/loader.service';
import { environment } from '../../environments/env-const';
import { DataInterface } from '../../contracts/interfaces/data-interface';

@Injectable()
export class ImgsService {

	private urlPrefix: string = environment.urlPrefix;

	constructor(
		private httpCli: HttpClient,
		private loaderService: LoaderService
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
		console.log('39 -- err', err);
		this.loaderService.weatherShowLoader.next(false);
		return Observable.throw(err.message || 'Server Error');
	}
}
