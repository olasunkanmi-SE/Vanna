import { Action } from '@ngrx/store';
import { Video } from './../model/video';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators';
import * as videoActions from './video.actions';
import { of, Observable } from 'rxjs';
import { VideoService } from './../service/video.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class VideoEffect {
  constructor(private actions$: Actions, private videoService: VideoService) {}

  /**
   * Create effects to load simulate the video actions
   * @return the videos observable or return an error
   */

  LoadVideos$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<videoActions.LoadVideos>(
        videoActions.VideoActionTypes.LOAD_VIDEOS
      ),
      exhaustMap((action: videoActions.LoadVideos) =>
        this.videoService.getVideos().pipe(
          map((videos: Video[]) => new videoActions.LoadVideosSuccess(videos)),
          catchError((err) => of(new videoActions.LoadVideosFailure(err)))
        )
      )
    )
  );

  LoadVideo$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<videoActions.LoadVideo>(videoActions.VideoActionTypes.LOAD_VIDEO),
      exhaustMap((action: videoActions.LoadVideo) =>
        this.videoService.getVideoById(action.payload).pipe(
          map((video: Video) => new videoActions.LoadVideoSuccess(video)),
          catchError((err) => of(new videoActions.LoadVideosFailure(err)))
        )
      )
    )
  );
}
