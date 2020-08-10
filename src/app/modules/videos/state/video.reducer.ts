import { Video } from './../model/video';
import * as videoActions from './video.actions';
export interface videoState {
  videos: Video[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: videoState = {
  videos: [],
  loading: false,
  loaded: false,
  error: '',
};

export function videoReducer(
  state = initialState,
  action: videoActions.VideoAction
): videoState {
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
