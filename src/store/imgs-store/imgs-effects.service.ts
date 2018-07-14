import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import _ from 'lodash';

import { ImgsService } from '../../services/imgs/img.service';
import * as imgsActions from './imgs-actions';
import * as fromImgsReducer from './img-reducer';

@Injectable()
export class ImgsEffects {

	@Effect()
	imgsFetch = this.actions$
	.ofType(imgsActions.FETCH_IMAGES)
	.switchMap((action: imgsActions.FetchImages) => {
		return this.imgsService.fetchInitialImages()
	})
	.map((res) => {
		return [...res.data];
	})
	.map((images) => {
		if (!images) {
			return null;
		} else {
			return {
				type: imgsActions.SET_IMAGES,
				payload: images
			}
		}
	});

	constructor(
		public actions$: Actions,
		/* private httpCli: HttpClient, */
		private imgsService: ImgsService,
		private store: Store<fromImgsReducer.ImgsFeatureState>
	) {}

}
