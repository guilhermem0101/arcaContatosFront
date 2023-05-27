import { Component } from '@angular/core';
interface FuncaoLinear {
  plano: string;
  a: number;
  b: number;
  x: number;
  y: number;
}
@Component({
  selector: 'app-calculo-de-planos',
  templateUrl: './calculo-de-planos.component.html',
  styleUrls: ['./calculo-de-planos.component.css']
})
export class CalculoDePlanosComponent {

  funcoes: FuncaoLinear[] = [
    { plano: 'Mensal', a: 19.90, b: 27.90, x: 0, y: 0 },
    { plano: 'Trimestral', a: 58.00, b: 80, x: 0, y: 0 },
    { plano: 'Semestral', a: 119.90, b: 150.90, x: 0, y: 0 },
    { plano: 'Anual', a: 214.99, b: 240.99, x: 0, y: 0 }];


  calcularFuncao(funcao: FuncaoLinear): void {
    funcao.y = funcao.a * funcao.x + funcao.b;
  }


 

  

}
