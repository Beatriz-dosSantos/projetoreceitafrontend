import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Receita } from './receitas.model';
@Injectable({
  providedIn: 'root',
})
export class ReceitasService {
  private apiURL = 'http://localhost:3000/receita';

  constructor(private http: HttpClient) {}

  //metodos ↓↓ CRUD
  listarReceitas(): Observable<Receita[]> {
    //↑ metodo GET ALL
    return this.http.get<Receita[]>(this.apiURL);
  }

  cadastrarReceitas(receita: Receita): Observable<Receita> {
    //↑ metodo POST
    return this.http.post<Receita>(this.apiURL, receita);
  }

  buscarReceitas(id: string): Observable<Receita> {
    //↑ metodo GET
    return this.http.get<Receita>(`${this.apiURL}/${id}`);
  }

  atualizarReceitas(id: string, receita: Receita): Observable<Receita> {
    //↑ metodo PATCH/PUT
    return this.http.patch<Receita>(`${this.apiURL}/${id}`, receita);
  }
  deletarAluno(id: string): Observable<void> {
    //↑ metodo DELETE
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
