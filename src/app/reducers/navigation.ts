import * as navigation from '../actions/navigation';


export interface State {
    isNavigationVisible: boolean;
}

const initialState: State = {
    isNavigationVisible: true
};

export function reducer(state = initialState, action: navigation.Actions): State {
  switch (action.type) {
    case navigation.OPEN_NAVIGATION:
      return {
        isNavigationVisible: true
      };

    case navigation.CLOSE_NAVIGATION:
      return {
        isNavigationVisible: false
      };

    default:
      return state;
  }
}

export const getNavigationVisibility = (state: State) => {
    return state.isNavigationVisible;
};
