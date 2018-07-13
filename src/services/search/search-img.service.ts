import { Injectable } from '@angular/core';
import { HttpParams, HttpRequest, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/env-const';

@Injectable()
export class SearchImgsService {

	private urlPrefix: string = environment.urlPrefix;

	constructor(
		private httpCli: HttpClient
	) {}

	searchByTerm(text: string) {
		const url = `${this.urlPrefix}/search`;
		const req = new HttpRequest('GET', url, {
			reportProgress: true, params: new HttpParams().set('term', text)
		});
		return this.httpCli.request(req);
	}

}
