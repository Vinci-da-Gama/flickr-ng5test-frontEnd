import * as imgsActions from './imgs-actions';
import { ImgClass } from '../../contracts/models/img.class';
import * as fromAppReducer from '../app-store/app.reducers';

export interface ImgsFeatureState extends fromAppReducer.AppState {
	imgs: ImgsState
}

export interface ImgsState {
	imgs: ImgClass[]
}

const initImgsState: ImgsState = {
	imgs: [
		new ImgClass('')
	]
}

export function imgsReducer (state: ImgsState = initImgsState, action: imgsActions.ImgsActions) {
	switch (action.type) {
		case (imgsActions.SET_IMAGES):
			return {
				...state,
				imgs: action.payload
			};
		default:
			return state;
	}
}
