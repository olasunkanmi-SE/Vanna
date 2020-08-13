import { Video } from './../../model/video';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() video: Video;
  @ViewChild('videoPlayer', { static: false })
  videoplayer: ElementRef;
  isPlay: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleVideo(event?: any) {
    if (this.isPlay) {
      this.videoplayer.nativeElement.play();
    } else {
      !this.isPlay;
    }
  }
}
