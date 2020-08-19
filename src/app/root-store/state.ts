import * as fromVideo from './../modules/videos/state/video.reducer';
import * as fromSwipe from './reducers/swipe.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

/**
 * Define the Application state
 */

export interface State {
  video: fromVideo.VideoState;
  swipe: fromSwipe.swipeState;
}

/**
 * create the Application state reducer
 * @return All states
 */

export const reducers: ActionReducerMap<State> = {
  video: fromVideo.videoReducer,
  swipe: fromSwipe.SwipeReducer,
};

/**
 * create selectors to select slices of the videoState
 * @return void
 */

export const getVideoState = createFeatureSelector<fromVideo.VideoState>(
  'video'
);
export const getVideos = createSelector(
  getVideoState,
  fromVideo.videoAdaptor.getSelectors().selectAll
);
export const getIsLoading = createSelector(
  getVideoState,
  fromVideo.getVideosLoading
);
export const getIsLoaded = createSelector(
  getVideoState,
  fromVideo.getVideosLoaded
);
export const getError = createSelector(getVideoState, fromVideo.getError);

export const getCurrentVideo = createSelector(
  getVideoState,
  fromVideo.getCurrentVideoId,
  (state) => state.entities[state.selectedVideoId]
);

/**
 * create selectors to select slices of the swipe state
 * @return void
 */

export const getswipeState = createFeatureSelector<fromSwipe.swipeState>(
  'swipe'
);
export const getCurrentIndex = createSelector(
  getswipeState,
  fromSwipe.getCurrentIndex
);
