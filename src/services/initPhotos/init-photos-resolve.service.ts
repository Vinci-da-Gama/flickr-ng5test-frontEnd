import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ImgsService } from '../imgs/img.service';
import { HttpResponse } from '../../../node_modules/@angular/common/http';

@Injectable()
export class InitPhotosResolveService implements Resolve<any> {

	constructor(
		private imgsService: ImgsService
	) {}

	resolve( currRoute: ActivatedRouteSnapshot ):
	Observable<any> | Promise<any> | any  {
		console.log('17 -- ', currRoute);
		const initImgs: Observable<HttpResponse<any>> = this.imgsService.fetchInitialImages();
		console.log('19 -- ', initImgs);
		return initImgs;
	}

}
