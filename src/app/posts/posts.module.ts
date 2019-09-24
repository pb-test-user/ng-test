import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsResolver } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { TimeAgoPipe } from 'time-ago-pipe';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      posts: PostsResolver
    }
  }
];

@NgModule({
  declarations: [PostsComponent, PostListComponent, PostDetailComponent, TimeAgoPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatSidenavModule
  ],
  exports: [PostsComponent],
  providers: [PostsResolver]
})
export class PostsModule { }
