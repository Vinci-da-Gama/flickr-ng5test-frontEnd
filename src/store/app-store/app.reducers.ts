import { ActionReducerMap } from '@ngrx/store';

import * as fromTextReducer from '../text-store/text-reducer';

export interface AppState {
	text: fromTextReducer.TextState
}

export const reducers: ActionReducerMap<AppState> = {
	text: fromTextReducer.textReducer
}
