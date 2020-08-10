import { Observable } from 'rxjs';
import { Video } from './../model/video';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  APIUrl = environment.backendURL;
  videos: Video[];
  constructor(private http: HttpClient) {}

  /**
   * Get all videos
   * @return a video array Observable
   */

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.APIUrl}/videos`);
  }
}
