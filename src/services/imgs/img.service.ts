import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/env-const';

@Injectable()
export class ImgsService {

	private urlPrefix: string = environment.urlPrefix;

	constructor(
		private httpCli: HttpClient
	) {}

	fetchInitialImages(): any {
		const url = `${this.urlPrefix}/publicseed`;
		const req = new HttpRequest('GET', url, {
			reportProgress: true
		});
		return this.httpCli.request(req);
	}

}
