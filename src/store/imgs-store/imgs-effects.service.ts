import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { ImgClass } from '../../contracts/models/img.class';
import { environment } from '../../environments/env-const'
import * as imgsActions from './imgs-actions';
import * as fromImgsReducer from './img-reducer';

@Injectable()
export class ImgsEffects {

	@Effect()
	imgsFetch = this.actions$
	.ofType(imgsActions.FETCH_IMAGES)
	.switchMap((action: imgsActions.FetchImages) => {
		const url = `${environment.urlPrefix}/publicseed`;
		return this.httpCli.get<any>(url, {
			observe: 'body',
			responseType: 'json'
		});
	})
	.map((res) => {
		console.log('26 -- ', res);
		if (res) {
			return {
				type: imgsActions.SET_IMAGES,
				payload: res
			}
		} else {
			console.log('33 -- nothing return');
			return null;
		}
	});

	constructor(
		public actions$: Actions,
		private httpCli: HttpClient,
		private store: Store<fromImgsReducer.ImgsFeatureState>
	) {}

}
