import { Contatos } from './../model/contatos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private apiUrl = 'https://api.example.com/contatos';

  constructor(private http: HttpClient) { }

  getAllContatos(): Observable<Contatos[]> {
    return this.http.get<Contatos[]>(this.apiUrl);
  }

  createContatos(contatos: Contatos): Observable<Contatos> {
    return this.http.post<Contatos>(this.apiUrl, contatos);
  }

  updateContatos(contatos: Contatos): Observable<Contatos> {
    return this.http.put<Contatos>(`${this.apiUrl}/${contatos.id}`, contatos);
  }

  deleteContatos(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
