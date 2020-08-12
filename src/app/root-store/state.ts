import * as fromVideo from './../modules/videos/state/video.reducer';
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
}

/**
 * create the Application state reducer
 * @return All states
 */

export const reducers: ActionReducerMap<State> = {
  video: fromVideo.videoReducer,
};

/**
 * create selectors to select slices of the videoState
 * @return void
 */

export const getVideoState = createFeatureSelector<fromVideo.VideoState>(
  'video'
);
export const getCustomers = createSelector(getVideoState, fromVideo.getVideos);
export const getIsLoading = createSelector(
  getVideoState,
  fromVideo.getVideosLoading
);
export const getIsLoaded = createSelector(
  getVideoState,
  fromVideo.getVideosLoaded
);
export const getError = createSelector(getVideoState, fromVideo.getError);
