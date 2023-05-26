import { Component } from '@angular/core';
interface FuncaoLinear {
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
    { a: 19.90, b: 27.90, x: 0, y: 0 },
    { a: 58.00, b: 80, x: 0, y: 0 },
    { a: 119.90, b: 150.90, x: 0, y: 0 },
    { a: 214.99, b: 240.99, x: 0, y: 0 }];

  calcularFuncoes(): void {
    this.funcoes = [
      { a: 2, b: 3, x: 1, y: 0 },
      { a: -1, b: 5, x: 3, y: 0 },
      { a: 4, b: 0, x: -2, y: 0 },
      { a: 0, b: 2, x: 5, y: 0 }
    ];

    this.funcoes.forEach(funcao => {
      funcao.y = funcao.a * funcao.x + funcao.b;
    });

    
  }


  calcularFuncao(funcao: FuncaoLinear): void {
    funcao.y = funcao.a * funcao.x + funcao.b;
  }

}
