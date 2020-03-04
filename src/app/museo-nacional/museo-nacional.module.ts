import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MuseoNacionalPage } from './museo-nacional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: MuseoNacionalPage
      }
    ])
  ],
  declarations: [MuseoNacionalPage]
})
export class MuseoNacionalPageModule {}
