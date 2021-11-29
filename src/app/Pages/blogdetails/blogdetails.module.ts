import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogdetailsRoutingModule } from './blogdetails-routing.module';
import { BlogdetailsComponent } from './blogdetails.component';


@NgModule({
  declarations: [
    BlogdetailsComponent
  ],
  imports: [
    CommonModule,
    BlogdetailsRoutingModule
  ]
})
export class BlogdetailsModule { }
