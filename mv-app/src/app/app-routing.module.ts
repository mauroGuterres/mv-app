import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {EstabelecimentoComponent} from './components/estabelecimento/listagem/estabelecimento.component';
import {ProfissionalComponent} from './components/profissional/profissional.component';
import { EstabelecimentoAddComponent } from './components/estabelecimento/add/estabelecimento-add.component';

const routes: Routes = [
  {path: "", component: WelcomeComponent},
  { path: "about", component: AboutComponent },
  { path: "estabelecimento", component: EstabelecimentoComponent },
  { path: "estabelecimento/add", component: EstabelecimentoAddComponent },
  { path: "profissional", component: ProfissionalComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
