import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RedditTopPosts, Post, Item } from './posts';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { StorageService } from '../services/app-store.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<Observable<Item[]>> {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item[]> | Observable<never> {
    const params = this.getParams(route);
    if (Object.keys(params).length === 0) {
      return EMPTY;
    }

    const items: Observable<Item[]> = this.http.get<RedditTopPosts>(`${environment.reddit.apiRoot}`, {
      params
    }).pipe(
      map((data) => this.adapter(data)),
      map((data) => this.storageAdapter(data))
    );
    return items;
  }

  getParams(route: ActivatedRouteSnapshot): HttpParams {
    let params = new HttpParams();
    const filterQueryParams = environment.reddit.queryParams;
    filterQueryParams.forEach(name => {
      params = params.append(name, route.queryParamMap.get(name));
    });
    return params;
  }

  adapter(source: RedditTopPosts): Post[] {
    const data = source.data;
    const dataChildren = data && data.children || [];
    return dataChildren.map(child => child.data);
  }

  storageAdapter(posts: Post[]): Item[] {
    return posts.map(post => {
      return {
        post, storage: this.storage.restore(post.name) || {}
      };
    }).filter(e => !e.storage.dism);
  }
}
