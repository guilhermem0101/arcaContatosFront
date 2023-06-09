
import { Component, OnInit } from '@angular/core';
import { Contatos } from 'src/app/model/contatos';
import { ContatosService } from 'src/app/service/contatos.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contatos-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.css']
})
export class ContatosListComponent implements OnInit {

  p: number = 1;
  contato!: Contatos[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  currentDate!: any;

  constructor(
    public crudApi: ContatosService,
    
  ) { }

  ngOnInit() {
    this.currentDate = new Date().toISOString();

    this.dataState();
    let s = this.crudApi.GetContatosList();
    s.snapshotChanges().subscribe(data => {
      this.contato = [];
      data.forEach(item => {
        let a:any = item.payload.toJSON();
        a['$key'] = item.key;


        this.contato.push(a as Contatos);
      })
    })
  }
  dataState() {
    this.crudApi.GetContatosList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }
  deleteStudent(contato: { $key: string; }) {
    if (window.confirm('Are sure you want to delete this student ?')) {
      this.crudApi.DeleteContato(contato.$key)
      
    }
  }

  toggleAtendido(contato: Contatos){
    contato.atendido = !contato.atendido;
    this.crudApi.UpdateContato(contato)

  }


  
}
