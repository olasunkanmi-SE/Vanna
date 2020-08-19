import { Video } from './../../model/video';
import { Component, OnInit, Input } from '@angular/core';
import * as kf from '../../../../keyframes';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() video: Video;

  constructor() {}

  ngOnInit(): void {}
}
