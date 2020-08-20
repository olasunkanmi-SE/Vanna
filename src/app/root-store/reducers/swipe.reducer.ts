import { SwipeActions } from '../actions/swipe.actions';

/**
 * Define swipe state
 */
export interface swipeState {
  currentIndex: number;
}

/**
 * Create the the initial state
 */

const intialState: swipeState = {
  currentIndex: 0,
};

/**
 * define the swipe reducer
 */

export function SwipeReducer(state = intialState, action: SwipeActions) {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * define a getter for the current index
 */

export const getCurrentIndex = (state: swipeState): number =>
  state.currentIndex;
