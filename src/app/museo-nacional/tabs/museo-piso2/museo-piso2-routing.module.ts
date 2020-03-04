import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseoPiso2Page } from './museo-piso2.page';

const routes: Routes = [
  {
    path: '',
    component: MuseoPiso2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseoPiso2PageRoutingModule {}
