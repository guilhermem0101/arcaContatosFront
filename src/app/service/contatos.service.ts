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

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { 
    this.contatosRef = this.db.list('contatos-list');
    this.contatoRef = this.db.object('contatos-list/{id}');
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
          usuario: userId
        });
      }
    });
  }


  AddContatolist(sequencias: string[]) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;

        sequencias.forEach(contato => {
          this.contatosRef.push({
            numeroC: contato,
            usuario: userId
          });
        });
      }
    });
  }




  
  // Obter Objeto de Contato Individual
  GetContato(id: string) {
    this.contatoRef = this.db.object('contatos-list/' + id);
    return this.contatoRef;
  }

  // Obter Lista de Contatos
  GetContatosList() {
    this.contatosRef = this.db.list('contatos-list');
    return this.contatosRef;
  }

  // Atualizar Objeto de Contato
  UpdateContato(contato: Contatos) {
    this.contatoRef.update({
      nomeC: contato.nomeC,      
      atendido: contato.atendido,
      numeroC: contato.numeroC,
    });
  }

  // Excluir Objeto de Contato
  DeleteContato(id: string) {
    this.contatoRef = this.db.object('contatos-list/' + id);
    this.contatoRef.remove();
  }

}
