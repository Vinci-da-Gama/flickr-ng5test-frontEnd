import { Action } from '@ngrx/store';

export const SET_TEXT = 'SET_TEXT';

export class SetText implements Action {
	readonly type = SET_TEXT;
	constructor(
		public payload: string[]
	) {}
}

export type TextAction = SetText;
