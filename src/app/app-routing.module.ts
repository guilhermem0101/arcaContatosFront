import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ContatosComponent } from './contatos/contatos.component';
import { VendasComponent } from './vendas/vendas.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TabelaEspecialidadesComponent } from './funcionalidades/tabela-especialidades/tabela-especialidades.component';
import { CalculoDePlanosComponent } from './funcionalidades/calculo-de-planos/calculo-de-planos.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'vendas', component: VendasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'tabela-precos', component: TabelaEspecialidadesComponent },
  { path: 'calculo-precos', component: CalculoDePlanosComponent },
  { path: '', redirectTo: '/calculo-precos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
