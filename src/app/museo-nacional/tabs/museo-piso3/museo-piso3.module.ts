import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseoPiso3PageRoutingModule } from './museo-piso3-routing.module';

import { MuseoPiso3Page } from './museo-piso3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseoPiso3PageRoutingModule
  ],
  declarations: [MuseoPiso3Page]
})
export class MuseoPiso3PageModule {}
