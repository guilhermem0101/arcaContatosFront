import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

import { VendasComponent } from './vendas/vendas.component';
import { TabelaEspecialidadesComponent } from './funcionalidades/tabela-especialidades/tabela-especialidades.component';
import { CalculoDePlanosComponent } from './funcionalidades/calculo-de-planos/calculo-de-planos.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthGuard } from '..//guard/auth.guard';
import { ContatosAddComponent } from './contatos/contatos-add/contatos-add.component';
import { ContatosListComponent } from './contatos/contatos-list/contatos-list.component';
import { ContatosEditComponent } from './contatos/contatos-edit/contatos-edit.component';
const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent, canActivate: [AuthGuard] },
  { path: 'vendas', component: VendasComponent, canActivate: [AuthGuard] },   
  { path: 'tabela-precos', component: TabelaEspecialidadesComponent},
  { path: 'calculo-precos', component: CalculoDePlanosComponent},
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'add-contato', component: ContatosAddComponent, canActivate: [AuthGuard] },
  { path: 'list-contato', component: ContatosListComponent, canActivate: [AuthGuard] },
  { path: 'edit-contato', component: ContatosEditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
