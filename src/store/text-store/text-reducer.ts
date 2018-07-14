import * as fromTextAction from './text-actions';

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

export function textReducer(state: TextState = initTextState, action: fromTextAction.TextAction) {
	switch (action.type) {
		case (fromTextAction.SET_TEXT):
			return {
				...state,
				text: [...action.payload]
			};
		default:
			return state;
	}
}
