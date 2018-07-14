import { ActionReducerMap } from '@ngrx/store';

import * as fromTextReducer from '../text-store/text-reducer';

export interface AppState {
	text: fromTextReducer.TextState
}

export const AppReducer: ActionReducerMap<AppState> = {
	text: fromTextReducer.textReducer
}
