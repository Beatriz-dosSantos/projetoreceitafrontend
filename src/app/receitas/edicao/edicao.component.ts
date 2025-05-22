import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitasService } from '../receitas.service';
import { Receita } from '../receitas.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class EdicaoComponent implements OnInit {
  receita: Receita = {
    id: 0,
    descricao: '',
    ingredientes: '',
    quantidade: 0,
    tempo: 0,
    modoprep: '',
  };

  private id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private receitaService: ReceitasService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarReceita();
  }

  carregarReceita(): void {
    if (!this.id || isNaN(this.id)) {
      this.router.navigate(['/listagem']);
      return;
    }
    this.receitaService.buscarReceitas(this.id).subscribe((a) => {
      this.receita = a;
    });
  }

  salvar(): void {
    if (!this.receita) return;

    this.receitaService
      .atualizarReceitas(this.id, this.receita)
      .subscribe(() => {
        this.router.navigate(['/listagem']);
      });
  }
}
