import { Action } from '@ngrx/store';

import { ImgClass } from '../../contracts/models/img.class';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const SEARCH_IMAGES = 'SEARCH_IMAGES';
export const SET_IMAGES = 'SET_IMAGES';

export class FetchImages implements Action {
	readonly type = FETCH_IMAGES;
}

export class SearchImages implements Action {
	readonly type = SEARCH_IMAGES;
	constructor(
		public payload: string
	) {}
}

export class SetImages implements Action {
	readonly type = SET_IMAGES;
	constructor(
		public payload: ImgClass[]
	) {}
}

export type ImgsActions = FetchImages | SearchImages | SetImages;
