import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmatchComponent } from './addmatch/addmatch.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:"addMatch",component:AddmatchComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
