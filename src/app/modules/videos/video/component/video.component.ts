import { VideosComponent } from './../../videos.component';
import { Video } from './../../model/video';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() video: Video;

  constructor(public vd: VideosComponent) {}
  ended() {
    this.vd.nextVideo();
  }
  ngOnInit(): void {}
}
