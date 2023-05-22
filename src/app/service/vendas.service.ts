import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendas } from '../model/vendas';

@Injectable({
  providedIn: 'root'
})
export class VendasService {
  private apiUrl = 'https://api.example.com/vendas';

  constructor(private http: HttpClient) { }

  getAllVendas(): Observable<Vendas[]> {
    return this.http.get<Vendas[]>(this.apiUrl);
  }

  createVendas(vendas: Vendas): Observable<Vendas> {
    return this.http.post<Vendas>(this.apiUrl, vendas);
  }

  updateVendas(vendas: Vendas): Observable<Vendas> {
    return this.http.put<Vendas>(`${this.apiUrl}/${vendas.idVenda}`, vendas);
  }

  deleteVendas(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
