import { Video } from './../../model/video';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as kf from '../../../../keyframes';
import { trigger, keyframes, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition(
        '* =>slideOutRight',
        animate(1000, keyframes(kf.slideOutRight))
      ),
      transition('*=>slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('*=>slideOutUp', animate(1000, keyframes(kf.slideOutUp))),
      transition('*=>slideOutDown', animate(1000, keyframes(kf.slideOutDown))),
    ]),
  ],
})
export class VideoComponent implements OnInit {
  @Input() video: Video;
  animationState: string;

  constructor() {}

  ngOnInit(): void {}

  startAnimation(state) {
    console.log(state);
    this.animationState ? this.animationState : (this.animationState = state);
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
