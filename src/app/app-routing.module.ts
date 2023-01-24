import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'', redirectTo:'admin', pathMatch:'full'},
  {path:'not-found', component: NotFoundComponent},
  {path: '**', redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
