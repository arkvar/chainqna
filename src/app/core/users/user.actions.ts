import { Action } from '@ngrx/store';
import { User } from './user.model';

export const GET_USER               = '[Auth] Get user';
export const AUTHENTICATED          = '[Auth] Authenticated';
export const NOT_AUTHENTICATED      = '[Auth] Not Authenticated';

export const STEEM_LOGIN           = '[Auth] Steem login attempt';
export const LOGOUT                 = '[Auth] Logout';

export const AUTH_ERROR             = '[Auth] Error';


/// Get User AuthState

export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public payload?: any) {}
}

export class Authenticated implements Action {
    readonly type = AUTHENTICATED;
    constructor(public payload?: any) {}
}

export class NotAuthenticated implements Action {
    readonly type = NOT_AUTHENTICATED;
    constructor(public payload?: any) {}
}

export class AuthError implements Action {
    readonly type = AUTH_ERROR;
    constructor(public payload?: any) {}
}

/// Steem Login Actions

export class SteemLogin implements Action {
    readonly type = STEEM_LOGIN;
    constructor(public payload?: any) {}
}

/// Logout Actions

export class Logout implements Action {
    readonly type = LOGOUT;
    constructor(public payload?: any) {}
}


export type All
= GetUser
| Authenticated
| NotAuthenticated
| SteemLogin
| AuthError
| Logout;
