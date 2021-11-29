import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './Pages/add-blog/add-blog.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Pages/cards/cards.module').then(m => m.CardsModule) },
  { path: 'bloglists', loadChildren: () => import('./Pages/bloglists/bloglists.module').then(m => m.BloglistsModule) },
  { path: 'blogdetails', loadChildren: () => import('./Pages/blogdetails/blogdetails.module').then(m => m.BlogdetailsModule) },
  {
    path: 'addBlog', loadChildren: () => import('./Pages/add-blog/add-blog.module').then(m => m.AddBlogModule)
 },{path:"edit", component:AddBlogComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
