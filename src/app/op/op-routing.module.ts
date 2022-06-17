import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpComponent } from './op.component';

const routes: Routes = [{ path: '', component: OpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpRoutingModule { }
