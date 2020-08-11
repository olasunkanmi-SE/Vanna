import { SwipeActions } from '../actions/swipe.actions';

export interface State {
  currentIndex: number;
}

const intialState: State = {
  currentIndex: 0,
};

export function SwipeReducer(state = intialState, action: SwipeActions) {}
