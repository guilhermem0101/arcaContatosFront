import { Component, OnInit } from '@angular/core';
import { VendasService } from '../service/vendas.service';
import { Vendas } from '../model/vendas';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {
  vendas: Vendas[] = [];
  globalFilter: string = '';

  constructor(private vendasService: VendasService) { }

  ngOnInit(): void {
    this.loadVendas();
  }

  loadVendas(): void {
    this.vendasService.getAllVendas().subscribe(vendas => {
      this.vendas = vendas;
    });
  }
}
