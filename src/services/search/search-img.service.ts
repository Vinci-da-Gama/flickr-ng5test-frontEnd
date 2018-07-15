import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/env-const';
import { DataInterface } from '../../contracts/interfaces/data-interface';

@Injectable()
export class SearchImgsService {

	private urlPrefix: string = environment.urlPrefix;

	constructor(
		private httpCli: HttpClient
	) {}

	searchByTerm(text: string) {
		const url: string = (`${environment.urlPrefix}/search/${text}`).toString();
		return this.httpCli.get<DataInterface>(url, {
			observe: 'body',
			responseType: 'json'
		});
	}

}
