import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseoPiso2PageRoutingModule } from './museo-piso2-routing.module';

import { MuseoPiso2Page } from './museo-piso2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseoPiso2PageRoutingModule
  ],
  declarations: [MuseoPiso2Page]
})
export class MuseoPiso2PageModule {}
