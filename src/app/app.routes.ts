import { Routes } from '@angular/router';
import { ListagemComponent } from './receitas/listagem/listagem.component';
import { CadastroComponent } from './receitas/cadastro/cadastro.component';
import { EdicaoComponent } from './receitas/edicao/edicao.component';

export const routes: Routes = [
    
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },

  { path: 'listagem', component: ListagemComponent },

  { path: 'cadastro', component: CadastroComponent },

  { path: 'edicao/:id', component: EdicaoComponent },
];
