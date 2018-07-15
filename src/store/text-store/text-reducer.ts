import * as tActions from './text-actions';

export interface TextState {
	text: string[]
}

const initTextState: TextState = {
	text: [
		'Images Show Room',
		'Home',
		'Search'
	]
}

export function textReducer (state: TextState = initTextState, action: tActions.TextAction) {
	switch (action.type) {
		case (tActions.SET_TEXT):
			return {
				...state,
				text: [...state.text, ...action.payload]
			};
		default:
			return state;
	}
}
