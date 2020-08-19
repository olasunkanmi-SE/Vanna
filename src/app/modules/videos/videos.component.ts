import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../root-store/state';
import * as VIDEO from '../videos/state/video.actions';
import { Store, select } from '@ngrx/store';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../../keyframes';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition(
        '* =>slideOutRight',
        animate(1000, keyframes(kf.slideOutRight))
      ),
      transition('*=>slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('*=>slideOutUp', animate(300, keyframes(kf.slideOutUp))),
      transition('*=>slideOutDown', animate(300, keyframes(kf.slideOutDown))),
    ]),
  ],
})
export class VideosComponent implements OnInit {
  videos$: Observable<any>;
  videosLength: number;
  VideoSub: Subscription;
  animationState: string;
  currentVideo;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new VIDEO.LoadVideos());
    this.videos$ = this.store.pipe(select(fromRoot.getVideos));
    this.VideoSub = this.videos$
      .pipe()
      .subscribe((res) => (this.videosLength = res.length));
  }

  ngOnDestroy(): void {
    this.VideoSub.unsubscribe();
  }
}
