import { Video } from './../model/video';
import * as videoActions from './video.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

/**
 * Define the video State
 */
export interface VideoState extends EntityState<Video> {
  selectedVideoId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

/**
 * Create an instance of the entity adaptor which returns the video type
 */

export const videoAdaptor: EntityAdapter<Video> = createEntityAdapter<Video>();

/**
 * Define default customer with some initial value
 */

export const defaultVideo: VideoState = {
  ids: [],
  entities: {},
  selectedVideoId: null,
  loading: false,
  loaded: false,
  error: '',
};

/**
 * Define the video initial state
 */

export const initialState = videoAdaptor.getInitialState(defaultVideo);

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
      return videoAdaptor.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true,
      });
    case videoActions.VideoActionTypes.LOAD_VIDEOS_FAILURE:
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
}

export const getVideos = (state: VideoState) => state.selectedVideoId;
export const getVideosLoading = (state: VideoState) => state.loading;
export const getVideosLoaded = (state: VideoState) => state.loaded;
export const getError = (state: VideoState) => state.error;
