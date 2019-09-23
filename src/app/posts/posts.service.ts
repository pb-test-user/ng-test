import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RedditTopPosts } from './posts';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<Observable<RedditTopPosts>> {

  constructor(
    private http: HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RedditTopPosts> | Observable<never> {
    const params = this.getParams(route);
    if (Object.keys(params).length === 0) {
      return EMPTY;
    }
    return this.http.get<RedditTopPosts>(`${environment.reddit.apiRoot}`, {
      params
    });
  }

  getParams(route: ActivatedRouteSnapshot): HttpParams {
    let params = new HttpParams();
    const filterQueryParams = environment.reddit.queryParams;
    filterQueryParams.forEach(name => {
      params = params.append(name, route.queryParamMap.get(name));
    });
    return params;
  }
}
