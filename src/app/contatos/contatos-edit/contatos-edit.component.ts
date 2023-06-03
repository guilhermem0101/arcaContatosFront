import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatosService } from 'src/app/service/contatos.service';

@Component({
  selector: 'app-contatos-edit',
  templateUrl: './contatos-edit.component.html',
  styleUrls: ['./contatos-edit.component.css']
})
export class ContatosEditComponent implements OnInit {
  contatoForm!: FormGroup;
  idc!:any

  constructor(
    private crudApi: ContatosService,

    private actRoute: ActivatedRoute,
    private router: Router,
    
  ) { }
  ngOnInit() {


    this.contatoForm = new FormGroup({
      nomeC: new FormControl()
     
    });
    
     this.idc = this.actRoute.snapshot.paramMap.get('id');

    if (this.idc) {
      this.crudApi
        .GetContato(this.idc)
        .valueChanges()
        .subscribe((data) => {
          this.contatoForm.setValue(data);
        });
    }

  }
  get nomeC() {
    return this.contatoForm.get('nomeC');
  }

  get numeroC() {
    return this.contatoForm.get('numeroC');
  }

  goBack() {
    this.router.navigate(['list-contato']);
  }
  updateForm() {
    this.crudApi.UpdateContato2(this.contatoForm.value, this.idc) ;
    
    this.router.navigate(['list-contato']);
  }
}
