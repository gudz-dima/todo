import { Action } from '@ngrx/store';

export const SET_FILTR = '[FILTER] Set filtr';

export type filtrsValid = 'все' | 'выполенные' | 'активные';

export class SetFiltrAction implements Action {
  readonly type = SET_FILTR;

  constructor(public filtr: filtrsValid) {}
}

export type actions = SetFiltrAction;
