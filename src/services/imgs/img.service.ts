import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/env-const';

@Injectable()
export class ImgsService {

	private urlPrefix: string = environment.urlPrefix;

	constructor(
		private httpCli: HttpClient
	) {}

	fetchInitialImages(): any {
		const url = `${environment.urlPrefix}/publicseed`;
		return this.httpCli.get<any>(url, {
			observe: 'body',
			responseType: 'json'
		});
	}

}
