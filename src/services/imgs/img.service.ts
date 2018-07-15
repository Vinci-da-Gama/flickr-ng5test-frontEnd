import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';

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
		});
	}

}
