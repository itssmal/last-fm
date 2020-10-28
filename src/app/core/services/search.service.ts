import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {ResponseInterface} from '../models/response.interface';
import {ResultInterface} from '../models/result.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public searchTrack(query): Observable<ResultInterface> {
    return this.http.get<ResponseInterface>(`${environment.api_url}?method=track.search&track=${query}`).pipe(map(res => res.results))
  }
}
