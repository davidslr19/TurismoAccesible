import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'parque-simon-bolivar',
    loadChildren: () => import('./parque-simon-bolivar/parque-simon-bolivar.module').then( m => m.ParqueSimonBolivarPageModule)
  },
  {
    path: 'museo-nacional',
    loadChildren: () => import('./museo-nacional/museo-nacional.module').then( m => m.MuseoNacionalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
  //,
  // {
  //   path: 'museo-piso1',
  //   loadChildren: () => import('./museo-nacional/tabs/museo-piso1/museo-piso1.module').then( m => m.MuseoPiso1PageModule)
  // },
  // {
  //   path: 'museo-piso2',
  //   loadChildren: () => import('./museo-nacional/tabs/museo-piso2/museo-piso2.module').then( m => m.MuseoPiso2PageModule)
  // },
  // {
  //   path: 'museo-piso3',
  //   loadChildren: () => import('./museo-nacional/tabs/museo-piso3/museo-piso3.module').then( m => m.MuseoPiso3PageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
