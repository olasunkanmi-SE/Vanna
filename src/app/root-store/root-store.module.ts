
import { VideoEffect } from './../modules/videos/state/video.effects';
import { reducers } from './state';
import { environment } from './../../environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule, Actions } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([VideoEffect]),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})
export class RootStoreModule {}
