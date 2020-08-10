import { Video } from './../model/video';
import { Action } from '@ngrx/store';

/**
 * Define video Action types
 */

export enum VideoActionTypes {
  LOAD_VIDEOS = '[VIdeo] Load Videos',
  LOAD_VIDEOS_SUCCESS = '[Video] Load Videos Success',
  LOAD_VIDEOS_FAILURE = '[Video] Load Videos Failure',
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

/**
 * export video actions
 */

export type VideoAction = LoadVideos | LoadVideosSuccess | LoadVideosFailure;
