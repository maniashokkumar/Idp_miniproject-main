import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { BloglistsComponent } from './bloglists.component';

const routes: Routes = [{ path: '', component: BloglistsComponent },

{
  path: "/edit", component: AddBlogComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloglistsRoutingModule { }
