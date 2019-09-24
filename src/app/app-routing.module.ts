import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: 'post/:id', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
