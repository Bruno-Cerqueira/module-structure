import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhComponent } from './ph.component';

const routes: Routes = [{ path: '', component: PhComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhRoutingModule { }
