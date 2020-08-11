import { Action } from '@ngrx/store';

export enum SwipeActionTypes {
  swipeUp = '[SWIPE] swipe Up',
  swipeDown = '[SWIPE] swipe Down',
}

export class SwipeUp implements Action {
  readonly type = SwipeActionTypes.swipeUp;
}

export class SwipeDown implements Action {
  readonly type = SwipeActionTypes.swipeDown;
}

export type SwipeActions = SwipeUp | SwipeDown;
