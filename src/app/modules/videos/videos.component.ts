import { Observable, Subscription, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../root-store/state';
import * as VIDEO from '../videos/state/video.actions';
import { Store, select, ActionsSubject, Action } from '@ngrx/store';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../../keyframes';
import { filter, takeUntil } from 'rxjs/operators';
import * as SWIPE from '../../root-store/actions/swipe.actions';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  /**
   * Create swiping animations with keyframes
   */
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
  videos;
  videosLength: number;
  VideoSub: Subscription;
  animationState: string;
  currentVideo;
  destroy$: Subject<boolean> = new Subject<boolean>();
  currentIndex$: Observable<number>;
  currentIndex: number;
  IndexSubscription: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private actionsSubject: ActionsSubject
  ) {}

  ngOnInit(): void {
    this.startAnimation;
    /**
     * Fetch all videos and subscribe to it
     */
    this.store.dispatch(new VIDEO.LoadVideos());
    this.videos$ = this.store.pipe(select(fromRoot.getVideos));
    this.VideoSub = this.videos$.pipe().subscribe((res) => {
      this.videosLength = res.length;
      this.videos = res;
    });
    /**
     * Fetch the current video index from the store
     */

    this.currentIndex$ = this.store.pipe(select(fromRoot.getCurrentIndex));
    this.IndexSubscription = this.currentIndex$.subscribe(
      (res) => (this.currentIndex = res)
    );

    /**
     *change videos based on user actions of swiping left or right
     */

    this.actionsSubject
      .pipe(
        filter((action: Action) => {
          return (
            action.type === SWIPE.SwipeActionTypes.swipeUp ||
            action.type === SWIPE.SwipeActionTypes.swipeDown
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((action) => {
        if (action.type === SWIPE.SwipeActionTypes.swipeUp) {
          this.nextVideo();
        } else if (action.type === SWIPE.SwipeActionTypes.swipeDown) {
          this.previousVideo();
        }
      });
  }

  /**
   * Determine the index of the next video
   */

  nextVideo() {
    // this.startAnimation('slideOutUp');

    if (this.currentIndex < this.videosLength - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  /**
   * Determine the index of the previous video
   */

  previousVideo() {
    // this.startAnimation('slideOutDown');

    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.videosLength - 1;
    }
  }

  /**
   * change the video to the next video
   */

  swipeUp() {
    this.store.dispatch(new SWIPE.SwipeUp());
  }

  /**
   * change the video to the previous video
   */

  swipeDown() {
    this.store.dispatch(new SWIPE.SwipeDown());
  }

  /**
   * Start the video swiping animation
   * @params state
   */

  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  /**
   * Reset the video animation after the animation is done
   *
   */

  resetAnimationState() {
    this.animationState = '';
  }

  /**
   * Unsubscribe after the page is destroyed
   */

  ngOnDestroy(): void {
    this.VideoSub.unsubscribe();
    this.IndexSubscription.unsubscribe();
    this.destroy$.unsubscribe();
  }
}
