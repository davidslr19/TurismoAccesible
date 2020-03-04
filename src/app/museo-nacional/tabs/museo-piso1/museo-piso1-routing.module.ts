import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseoPiso1Page } from './museo-piso1.page';

const routes: Routes = [
  {
    path: '',
    component: MuseoPiso1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseoPiso1PageRoutingModule {}
