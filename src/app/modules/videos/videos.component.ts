
import { Observable, Subscription } from 'rxjs';
import { Video } from './model/video';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../root-store/state';
import * as VIDEO from '../videos/state/video.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videos$: Observable<Video[]>;
  videosLength: number;
  VideoSub: Subscription;
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new VIDEO.LoadVideos());
    this.videos$ = this.store.pipe(select(fromRoot.getCustomers));
    this.VideoSub = this.videos$
      .pipe()
      .subscribe((res) => (this.videosLength = res.length));
  }
}
