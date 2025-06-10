import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Receita } from '../receitas.model';
import { ReceitasService } from '../receitas.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {

  receita: Receita = {
    id: '',
    descricao: '',
    ingredientes: '',
    quantidade: 0,
    tempo: 0,
    modoprep: ''
  }

  constructor(
    private receitaService: ReceitasService, 
    private router: Router
  ) {}

  salvar(){
    this.receitaService.cadastrarReceitas(this.receita).subscribe(() =>{
      this.router.navigate(['/listagem'])
    })
  }
}
