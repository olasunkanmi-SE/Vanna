import { Video } from './../model/video';
import { Action } from '@ngrx/store';

export enum VideoActionTypes {
  LOAD_VIDEOS = '[VIdeo] Load Videos',
  LOAD_VIDEOS_SUCCESS = '[Video] Load Videos Success',
  LOAD_VIDEOS_FAILURE = '[Video] Load Videos Failure',
}

export class LoadVideos implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEOS;
}

export class LoadVideosSuccess implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEOS_SUCCESS;
  constructor(public payload: Video[]) {}
}

export class LoadVideosFailure implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEOS_FAILURE;
  constructor(public payload: string) {}
}

export type VideoAction = LoadVideos | LoadVideosSuccess | LoadVideosFailure;
