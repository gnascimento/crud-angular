import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from '../cadastro-pessoa/cadastro-pessoa.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BuscarPessoaComponent } from '../buscar-pessoa/buscar-pessoa.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadastro-pessoa', component: CadastroPessoaComponent },
  { path: 'cadastro-pessoa/:id', component: CadastroPessoaComponent },
  { path: 'buscar-pessoa', component: BuscarPessoaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
