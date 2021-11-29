import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardtemplateComponent } from './cardtemplate/cardtemplate.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardtemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardtemplateComponent
  ]
})
export class CardtempModule {
 
}
