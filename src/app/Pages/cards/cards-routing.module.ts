import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailsComponent } from '../blogdetails/blogdetails.component';
import { CardsComponent } from './cards.component';

const routes: Routes = [{ path: '', component: CardsComponent },
{ path: "blog/:id", component: BlogdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
