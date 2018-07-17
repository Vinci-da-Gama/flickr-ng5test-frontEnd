import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { ImgsService } from '../../services/imgs/img.service';
import { LoaderService } from '../../services/loader/loader.service';
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
		console.log('22 -- ', res);
		return [...res.data];
	})
	.map((images) => {
		this.loaderService.weatherShowLoader.next(false);
		if (!images) {
			return null;
		} else {
			return {
				type: imgsActions.SET_IMAGES,
				payload: images
			}
		}
	});

	@Effect()
	imgsSearch = this.actions$
	.ofType(imgsActions.SEARCH_IMAGES)
	.switchMap((action: imgsActions.SearchImages) => {
		return this.imgsService.searchByTerm(action.payload);
	})
	.map((res) => {
		console.log('44 -- ', res);
		return [...res.data];
	})
	.map((images) => {
		this.loaderService.weatherShowLoader.next(false);
		if (!images) {
			return null;
		} else {
			this.router.navigate(['/']);
			return {
				type: imgsActions.SET_IMAGES,
				payload: images
			}
		}
	});

	constructor(
		public actions$: Actions,
		private imgsService: ImgsService,
		private loaderService: LoaderService,
		private router: Router
	) {}

}
