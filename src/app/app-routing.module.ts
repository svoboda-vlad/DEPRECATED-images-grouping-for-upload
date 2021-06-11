import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesGroupingComponent } from './images-grouping/images-grouping.component';


const routes: Routes = [
  { path: '', component: ImagesGroupingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
