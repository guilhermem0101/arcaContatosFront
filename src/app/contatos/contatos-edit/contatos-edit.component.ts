import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatosService } from 'src/app/service/contatos.service';

@Component({
  selector: 'app-contatos-edit',
  templateUrl: './contatos-edit.component.html',
  styleUrls: ['./contatos-edit.component.css']
})
export class ContatosEditComponent implements OnInit {
  contatoForm!: FormGroup;
  constructor(
    private crudApi: ContatosService,

    private actRoute: ActivatedRoute,
    private router: Router,
    
  ) { }
  ngOnInit() {
    
    const id = this.actRoute.snapshot.paramMap.get('id');
    // this.crudApi
    //   .GetContato(id)
    //   .valueChanges()
    //   .subscribe((data) => {
    //     this.editForm.setValue(data);
    //   });
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
    this.crudApi.UpdateContato(this.contatoForm.value);
    
    this.router.navigate(['list-contato']);
  }
}
