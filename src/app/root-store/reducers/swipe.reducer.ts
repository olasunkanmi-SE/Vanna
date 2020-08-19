import { SwipeActions } from '../actions/swipe.actions';

export interface swipeState {
  currentIndex: number;
}

const intialState: swipeState = {
  currentIndex: 0,
};

export function SwipeReducer(state = intialState, action: SwipeActions) {
  switch (action.type) {
    default:
      return state;
  }
}
