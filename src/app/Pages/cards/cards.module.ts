import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardtempModule } from 'src/app/Component/cardtemp/cardtemp.module';


@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    CardtempModule
    
  ],


})
export class CardsModule { }
