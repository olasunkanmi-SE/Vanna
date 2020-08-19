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

  startAnimation(state, currentIndex) {
    this.currentVideo = currentIndex;
    this.animationState ? this.animationState : (this.animationState = state);
    if (currentIndex > this.videosLength || currentIndex < 0) {
      return;
    }
    let nextIndex = 0;
    if (state) {
      if (state === 'slideOutUp') {
        const isLast = currentIndex === this.videosLength - 1;
        nextIndex = isLast ? 0 : currentIndex + 1;
        console.log(nextIndex);
      }
      if (state === 'slideOutDown') {
        console.log('down');
        const isFirst = currentIndex === 0;
        nextIndex = isFirst ? this.videosLength - 1 : currentIndex - 1;
      }
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  ngOnDestroy(): void {
    this.VideoSub.unsubscribe();
  }
}
