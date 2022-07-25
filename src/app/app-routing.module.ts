import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveComponent } from './components/interactive/interactive.component';


const routes: Routes = [
  {path:'interactive',component: InteractiveComponent },
  {path:'**',pathMatch:'full',redirectTo:'/interactive'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
