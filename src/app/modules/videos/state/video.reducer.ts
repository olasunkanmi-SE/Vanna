import { Video } from './../model/video';
import * as videoActions from './video.actions';

/**
 * Define the video State
 */
export interface VideoState {
  videos: Video[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

/**
 * Define the video initial state
 */

export const initialState: VideoState = {
  videos: [],
  loading: false,
  loaded: false,
  error: '',
};

/**
 * create the video reducer
 * @params initialstate,Video Action
 * @return Videotate
 */

export function videoReducer(
  state = initialState,
  action: videoActions.VideoAction
): VideoState {
  switch (action.type) {
    case videoActions.VideoActionTypes.LOAD_VIDEOS:
      return {
        ...state,
        loading: true,
      };
    case videoActions.VideoActionTypes.LOAD_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        videos: action.payload,
      };
    case videoActions.VideoActionTypes.LOAD_VIDEOS_FAILURE:
      return {
        ...state,
        videos: [],
        loading: false,
        loaded: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
}

export const getVideos = (state: VideoState) => state.videos;
export const getVideosLoading = (state: VideoState) => state.loading;
export const getVideosLoaded = (state: VideoState) => state.loaded;
export const getError = (state: VideoState) => state.error;
