import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmatchComponent } from './addmatch/addmatch.component';

const routes: Routes = [
  {
    path:"addMatch",component:AddmatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
