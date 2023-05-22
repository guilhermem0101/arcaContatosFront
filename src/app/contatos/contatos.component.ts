import { Component, OnInit } from '@angular/core';
import { Contatos } from '../model/contatos';
import { ContatosService } from '../service/contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  contatos: Contatos[] = [];
  globalFilter: string = '';

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {
    this.loadContatos();
  }

  loadContatos(): void {
    this.contatosService.getAllContatos().subscribe(contatos => {
      this.contatos = contatos;
    });
  }
}
