import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../receitas.service';
import { Receita } from '../receitas.model';
import { subscribeOn } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class ListagemComponent implements OnInit {
  receitas: Receita[] = [];

  constructor(private receitaService: ReceitasService) {}

  ngOnInit(): void {
    this.carregarReceita();
  }

  carregarReceita(): void {
    this.receitaService.listarReceitas().subscribe((res) => {
      this.receitas = res;
    });
  }
}