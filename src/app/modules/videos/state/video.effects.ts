import { Video } from './../model/video';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators';
import * as videoActions from './video.actions';
import { of } from 'rxjs';
import { VideoService } from './../service/video.service';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class VideoEffect {
  constructor(private actions$: Actions, private videoService: VideoService) {}

  /**
   * Use create effects to load simulate the video actions
   * @return the videos observable or return an error
   */
  @Effect()
  LoadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType<videoActions.LoadVideos>(
        videoActions.VideoActionTypes.LOAD_VIDEOS
      ),
      exhaustMap((actions: videoActions.LoadVideos) =>
        this.videoService.getVideos().pipe(
          map((videos: Video[]) => new videoActions.LoadVideosSuccess(videos)),
          catchError((err) => of(new videoActions.LoadVideosFailure(err)))
        )
      )
    )
  );
}
