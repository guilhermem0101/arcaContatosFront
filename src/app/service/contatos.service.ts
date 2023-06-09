import { Contatos } from './../model/contatos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  contatosRef: AngularFireList<any>;
  contatoRef: AngularFireObject<any>;
  id:any
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { 

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.id = user.uid;        
      }
    });

    this.contatosRef = this.db.list(`${this.id}/contatos-list`);
    this.contatoRef = this.db.object(`${this.id}/contatos-list/{id}`);
  }
  

  // Criar Contato
  AddContato(contato: Contatos) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;
        
        this.contatosRef.push({
          nomeC: contato.nomeC ? contato.nomeC : null,
          numeroC: contato.numeroC,          
          comentarios: contato.comentarios ? contato.comentarios : null,
          atendido: contato.atendido ? contato.atendido : null,
          dataHora: contato.dataHora.toISOString(),
          usuario: userId
        });
      }
    });
  }

 // Criar lista Contato
  AddContatolist(sequencias: string[]) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;

        sequencias.forEach(contato => {
          let c= new Date()
          this.contatosRef.push({
            
            numeroC: contato,
            atendido: false,
            dataHora: c.toISOString(),
            usuario: userId
          });
        });
      }
    });
  }




  
  // Obter Objeto de Contato Individual
  GetContato(id: string) {
    this.contatoRef = this.db.object(this.id +'/contatos-list/' + id);
    return this.contatoRef;
  }

  // Obter Lista de Contatos
  GetContatosList() {
    this.contatosRef = this.db.list(this.id+'/contatos-list');
    
    return this.contatosRef;
  }

  // Atualizar Objeto de Contato
  UpdateContato(contato: Contatos) {

    this.contatoRef = this.db.object(this.id + '/contatos-list/' + contato.$key);

    this.contatoRef.update({
      nomeC: contato.nomeC ? contato.nomeC : null,    
      atendido: contato.atendido,      
      
      
    });
  }

  UpdateContato2(contato: Contatos, idc:string) {

    this.contatoRef = this.db.object(this.id + '/contatos-list/' + idc);

    this.contatoRef.update({
      nomeC: contato.nomeC ? contato.nomeC : null,
           

      
    });
  }

  // Excluir Objeto de Contato
  DeleteContato(idc: string) {
    this.contatoRef = this.db.object(this.id + '/contatos-list/' + idc);
    this.contatoRef.remove();
  }

 }
