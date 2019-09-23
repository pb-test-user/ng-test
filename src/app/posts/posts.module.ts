import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsResolver } from './posts.service';
import { HttpClientModule } from '@angular/common/http';

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
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [PostsComponent],
  providers: [PostsResolver]
})
export class PostsModule { }
