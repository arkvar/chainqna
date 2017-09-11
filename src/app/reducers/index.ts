import { createSelector } from 'reselect';
import { storeFreeze } from 'ngrx-store-freeze';
import { ActionReducer } from '@ngrx/store';
import { environment } from 'environments/environment';

import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import * as navigationReducer from './navigation';

export interface State {
    navigation: navigationReducer.State;
}

const reducers = {
    navigation: navigationReducer.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getNavigationState = (state: State) => state.navigation;

export const getNavigationVisibility = createSelector(getNavigationState, navigationReducer.getNavigationVisibility);
