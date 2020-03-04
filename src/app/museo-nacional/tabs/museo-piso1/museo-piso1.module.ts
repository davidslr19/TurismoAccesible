import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MuseoPiso1PageRoutingModule } from './museo-piso1-routing.module';

import { MuseoPiso1Page } from './museo-piso1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MuseoPiso1Page
      }
    ])
  ],
  declarations: [MuseoPiso1Page]
})
export class MuseoPiso1PageModule {}
