import * as fromVideo from './../modules/videos/state/video.reducer';
import { ActionReducerMap } from '@ngrx/store';
'../../app/modules/videos/state/video.reducer';

/**
 * Define individual states
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
