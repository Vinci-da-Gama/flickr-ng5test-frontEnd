import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';

import { environment } from '../../environments/env-const';
import { ImgClass } from '../../contracts/models/img.class';

@Injectable()
export class ImgsService {

	private urlPrefix: string = environment.urlPrefix;

	constructor(
		private httpCli: HttpClient
	) {}

	fetchInitialImages() {
		const url = `${environment.urlPrefix}/publicseed`;
		return this.httpCli.get<{data: ImgClass[]}>(url, {
			observe: 'body',
			responseType: 'json'
		});
	}

}
