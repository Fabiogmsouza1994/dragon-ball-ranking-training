import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosTreino } from '../models/dadostreino.model';

@Injectable({
  providedIn: 'root'
})
export class LutadoresService {

  private url = 'http://localhost:3000/lutadores';

  constructor(private httpClient: HttpClient) {

  }

  todosLutadores(): Observable<DadosTreino[]>{
    return this.httpClient.get<DadosTreino[]>(this.url);
  }


  adicionar(treino: DadosTreino): Observable<DadosTreino> {
    this.addData(treino);

    return this.httpClient.post<DadosTreino>(this.url, treino);
  }


  private addData(lutador: any) {
    lutador.data = new Date();
  }

  remove(id: number) {
    return this.httpClient.delete<DadosTreino>(`${this.url}/${id}`);
  }

}
