import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent } from './videos.component';

import { VideoPageComponent } from './video/container/video-page/video-page.component';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent,
    children: [{ path: 'video', component: VideoPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosRoutingModule {}
