import { UserService } from './user.service';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';


import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import '../../utils/rxjs.operators';

import {AppState} from '../state';
import {User} from './user.model';
import {UsersQuery} from './user.reducer';

import * as userActions from './user.actions';
type Action = userActions.All;


@Injectable()
export class UserFacade {

  // ************************************************
  // Observable Queries available for consumption by views
  // ************************************************

  user$ = this.store.select(UsersQuery.getUser);

  // ************************************************
  // Effects to be registered at the Module level
  // ************************************************

  @Effect() getUser$: Observable<Action> = this.actions$.ofType(userActions.GET_USER)
               .map((action: userActions.GetUser) => (action.payload) )
               .switchMap(payload => this.userService.getUserO() )
               .map( user => {
                   if (user) {
                       console.log(user);
                       if (user.uid && user.uid.length > 3) {
                           /// User logged in
                           console.log('user logged in');
                           return new userActions.Authenticated(user);
                       }
                    //    }
                       /// User not logged in
                       console.log('not logged in');
                       return new userActions.NotAuthenticated();
                   } else {
                       /// User not logged in
                       console.log('not logged in');
                       return new userActions.NotAuthenticated();
                   }
               })
               .catch(err =>  {
                   console.log(err);
                   return Observable.of(new userActions.AuthError())
                } );


    /**
     * Login with Steem API
     */
     @Effect() login$: Observable<Action> = this.actions$.ofType(userActions.STEEM_LOGIN)
                 .map((action: userActions.SteemLogin) => action.payload)
                 .switchMap(payload => {
                    //  console.log(payload);
                     return this.authService.tryLogin(payload.uid, payload.postKey);
                 })
                 .map( newUser => {
                     // successful login
                    //  console.log('login SUCCESS');
                    //  console.log(newUser);
                    //  console.log(newUser.value);
                     this.userService.setUser(newUser.value);
                     return new userActions.GetUser(newUser.value);
                 })
                 .catch(err => {
                     return Observable.of(new userActions.AuthError({error: err.message}));
                 });


     @Effect() logout$: Observable<Action> = this.actions$.ofType(userActions.LOGOUT)
                 .map((action: userActions.Logout) => action.payload )
                 .switchMap(payload => {
                     return this.authService.logout();
                 })
                 .map( authData => {
                     return new userActions.NotAuthenticated();
                 })
                 .catch(err => Observable.of(new userActions.AuthError({error: err.message})) );


      @Effect({dispatch: false})
      init$: Observable<any> = defer(() => {
        this.store.dispatch(new userActions.GetUser());
      });

  // ************************************************
  // Internal Code
  // ************************************************

  constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private authService: AuthService,
      private userService: UserService
    //   private afAuth: AngularFireAuth,
    //   private db: AngularFireDatabase
  ) { }

  /**
   *
   */
  login(uid: string, postKey: string): Observable<User> {
    console.log('UserFacade::login(uid, postkey)');
    this.store.dispatch(new userActions.SteemLogin({uid: uid, postKey: postKey}));
    return this.user$;
  }

  /**
   *
   */
  logout(): Observable<User> {
    this.store.dispatch(new userActions.Logout());
    return this.user$;
  }

  // ******************************************
  // Internal Methods
  // ******************************************


}
