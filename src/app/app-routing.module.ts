import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComComponent } from './first-com/first-com.component';

const routes: Routes = [
  { path: 'index', component: FirstComComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
