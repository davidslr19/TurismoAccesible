import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseoPiso3Page } from './museo-piso3.page';

const routes: Routes = [
  {
    path: '',
    component: MuseoPiso3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseoPiso3PageRoutingModule {}
