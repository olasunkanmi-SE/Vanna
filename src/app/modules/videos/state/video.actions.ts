import { Video } from './../model/video';
import { Action } from '@ngrx/store';

/**
 * Define video Action types
 */

export enum VideoActionTypes {
  LOAD_VIDEOS = '[Video] Load Videos',
  LOAD_VIDEOS_SUCCESS = '[Video] Load Videos Success',
  LOAD_VIDEOS_FAILURE = '[Video] Load Videos Failure',
  LOAD_VIDEO = '[Video] Load Video',
  LOAD_VIDEO_SUCCESS = '[Video] Load Video Success',
  LOAD_VIDEO_FAILURE = '[Video] Load Video Failure',
}

/**
 * create the video actions
 */

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
export class LoadVideo implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEO;
  constructor(public payload: number) {}
}

export class LoadVideoSuccess implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEO_SUCCESS;
  constructor(public payload: Video) {}
}

export class LoadVideoFailure implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEO_FAILURE;
  constructor(public payload: string) {}
}

/**
 * export video actions
 */

export type VideoAction =
  | LoadVideos
  | LoadVideosSuccess
  | LoadVideosFailure
  | LoadVideo
  | LoadVideoSuccess
  | LoadVideoFailure;
