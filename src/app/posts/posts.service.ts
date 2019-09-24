import { Injectable } from '@angular/core';
import { Resolve, ChildActivationStart } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RedditTopPosts, Post } from './posts';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<Observable<Post[]>> {

  constructor(
    private http: HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Observable<never> {
    const params = this.getParams(route);
    if (Object.keys(params).length === 0) {
      return EMPTY;
    }
    const posts: Observable<Post[]> = this.http.get<RedditTopPosts>(`${environment.reddit.apiRoot}`, {
      params
    }).pipe(
      map((data) => this.adapter(data))
    );
    return posts;
  }

  getParams(route: ActivatedRouteSnapshot): HttpParams {
    let params = new HttpParams();
    const filterQueryParams = environment.reddit.queryParams;
    filterQueryParams.forEach(name => {
      params = params.append(name, route.queryParamMap.get(name));
    });
    return params;
  }

  adapter(response: RedditTopPosts): Post[] {
    const data = response.data;
    const dataChildren = data && data.children;
    return dataChildren.map(child => child.data) || [];
  }
}
