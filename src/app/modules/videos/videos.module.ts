import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { VideoComponent } from './video/component/video.component';
import { VideoPageComponent } from './video/container/video-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/core/modules/material/material.module';

@NgModule({
  declarations: [VideosComponent, VideoComponent, VideoPageComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
})
export class VideosModule {}
