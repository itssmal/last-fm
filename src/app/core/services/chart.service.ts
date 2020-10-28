import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {TrackResponse} from '../models/track.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  public getTopChart(page = 2): Observable<any> {
    return this.http.get<TrackResponse>(`${environment.api_url}?method=chart.gettoptracks&page=${page}&limit=50`).pipe(map(res => res.tracks))
  }
}
