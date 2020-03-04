import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseoNacionalPage } from './museo-nacional.page';

// const routes: Routes = [
//     {
//       path: '',
//       component: MuseoNacionalPage,
//       children:
//         [
//             {
//                 path: '/tabs/museo-nacional-piso1',
//                 loadChildren: () => import('./tabs/museo-nacional-piso1/museo-nacional-piso1.component').then( m => m.MuseoNacionalPiso1Component)
//               },
//               {
//                 path: 'museo-piso2',
//                 loadChildren: () => import('./tabs/museo-piso2/museo-piso2.module').then( m => m.MuseoPiso2PageModule)
//               },
//               {
//                 path: 'museo-piso3',
//                 loadChildren: () => import('./tabs/museo-piso3/museo-piso3.module').then( m => m.MuseoPiso3PageModule)
//               }
//         //   ,
//         //   {
//         //     path: 'museo-nacional-piso1',
//         //     redirectTo: './tabs/museo-piso1/museo-piso1',
//         //     pathMatch: 'full'
//         //   }
//         ]
//     }
//   ];

const routes: Routes = [
    {
      path: '',
      component: MuseoNacionalPage,
      children: [
        {
          path: '/piso1',
          children: [
            {
              path: '',
              loadChildren: '../museo-piso1/museo-piso1.module#MuseoPiso1PageModule'
            }
          ]
        },
        {
          path: '/piso2',
          children: [
            {
              path: '',
              loadChildren: '../museo-piso2/museo-piso2.module#MuseoPiso3PageModule'
            }
          ]
        },
        {
          path: '/piso3',
          children: [
            {
              path: '',
              loadChildren: '../museo-piso3/museo-piso3.module#MuseoPiso3PageModule'
            }
          ]
        },
        {
          path: '',
          redirectTo: '/tabs/museo-piso1',
          pathMatch: 'full'
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/museo-piso1',
      pathMatch: 'full'
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class MuseoNacionalRoutingPageModule {}