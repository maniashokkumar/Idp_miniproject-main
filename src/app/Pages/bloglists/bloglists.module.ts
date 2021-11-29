import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloglistsRoutingModule } from './bloglists-routing.module';
import { BloglistsComponent } from './bloglists.component';
import { CardtempModule } from 'src/app/Component/cardtemp/cardtemp.module';




@NgModule({
  declarations: [
    BloglistsComponent
  ],
  imports: [
    CommonModule,
    BloglistsRoutingModule,
    CardtempModule


  ]
})
export class BloglistsModule { }
