import { Action } from '@ngrx/store';

export const OPEN_NAVIGATION =   '[Navigation] Open';
export const CLOSE_NAVIGATION =  '[Navigation] Close';


export class OpenNavigationAction implements Action {
  readonly type = OPEN_NAVIGATION;
}

export class CloseNavigationAction implements Action {
  readonly type = CLOSE_NAVIGATION;
}

export type Actions = OpenNavigationAction | CloseNavigationAction;
