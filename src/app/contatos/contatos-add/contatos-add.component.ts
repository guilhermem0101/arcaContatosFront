import { Component, OnInit } from '@angular/core';
import { ContatosService } from 'src/app/service/contatos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contatos } from 'src/app/model/contatos';
@Component({
  selector: 'app-contatos-add',
  templateUrl: './contatos-add.component.html',
  styleUrls: ['./contatos-add.component.css']
})
export class ContatosAddComponent implements OnInit {
  public contatoForm!: FormGroup;
  texto!: string;
  sequencias: string[] = [];
  contatos!: Contatos[]
  contato!: Contatos



  constructor(
    public crudApi: ContatosService,
    public fb: FormBuilder,
  
  ) { }
  ngOnInit() {
    this.crudApi.GetContatosList();
    this.studenForm();
  }
  studenForm() {
    this.contatoForm = this.fb.group({
      numeroC: ['', [Validators.required, Validators.minLength(10)]],
      nomeC: [''],   
     
      
    });
  }
  get nomeC() {
    return this.contatoForm.get('nomeC');
  }

  get numeroC() {
    return this.contatoForm.get('numeroC');
  }
  ResetForm() {
    this.contatoForm.reset();
  }
  submitStudentData() {
    this.crudApi.AddContato(this.contatoForm.value);   
    this.ResetForm();
  }





  processarTexto() {
    // Limpa a lista de sequências antes de processar o texto novamente
    this.sequencias = [];

    // Expressão regular para selecionar sequências numéricas com mais de 3 algarismos
    const regex = /\d{4,}/g;

    // Encontra todas as sequências numéricas no texto
    const matches = this.texto.match(regex);

    // Remove duplicatas das sequências encontradas
    const sequenciasUnicas = Array.from(new Set(matches));

    // Armazena as sequências únicas na lista
    this.sequencias = sequenciasUnicas;

  
      

    // this.sequencias.forEach(item => {
    //   this.contato = { numeroC: item };
    //   this.contatos.push(this.contato );
    // });

    this.crudApi.AddContatolist(this.sequencias)
  }



}
