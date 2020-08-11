import { Video } from './../model/video';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as videoActions from './video.actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { VideoService } from './../service/video.service';
import { Actions, Effect, ofType } from '@ngrx/effects';

export class CustomerEffect {
  constructor(private actions$: Actions, private videoService: VideoService) {}
  @Effect()

  /**
   * Subscribe to to videos observables with ngRx Effect
   * @return the videos observable or return an error
   */
  LoadVideos$: Observable<Action> = this.actions$.pipe(
    ofType<videoActions.LoadVideos>(videoActions.VideoActionTypes.LOAD_VIDEOS),
    mergeMap((actions: videoActions.LoadVideos) =>
      this.videoService.getVideos().pipe(
        map((videos: Video[]) => new videoActions.LoadVideosSuccess(videos)),
        catchError((err) => of(new videoActions.LoadVideosFailure(err)))
      )
    )
  );
}
