import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-especialidades',
  templateUrl: './tabela-especialidades.component.html',
  styleUrls: ['./tabela-especialidades.component.css']
})
export class TabelaEspecialidadesComponent {


   especialidades: any[] = [
    {
      especialidade: 'Especialista - Clínica Popular',
      semArcaSaude: 'a partir de R$ 150,00',
      comArcaSaude: 'a partir de R$ 60,00'
    },
    {
      especialidade: 'Especialista - Referenciado',
      semArcaSaude: 'a partir de R$ 500,00',
      comArcaSaude: 'a partir de R$ 100,00'
    },
    {
      especialidade: 'Psicologia (sessão)',
      semArcaSaude: 'a partir de R$ 150,00',
      comArcaSaude: 'a partir de R$ 60,00'
    },
    {
      especialidade: 'Fisioterapia (sessão)',
      semArcaSaude: 'a partir de R$ 90,00',
      comArcaSaude: 'a partir de R$ 40,00'
    },
    {
      especialidade: 'Hemograma Completo',
      semArcaSaude: 'a partir de R$ 35,00',
      comArcaSaude: 'a partir de R$ 6,10'
    },
    {
      especialidade: 'Glicemia',
      semArcaSaude: 'a partir de R$ 15,00',
      comArcaSaude: 'a partir de R$ 3,70'
    },
    {
      especialidade: 'Colesterol total',
      semArcaSaude: 'a partir de R$ 15,00',
      comArcaSaude: 'a partir de R$ 4,00'
    },
    {
      especialidade: 'Vitamina D',
      semArcaSaude: 'a partir de R$ 95,00',
      comArcaSaude: 'a partir de R$ 35,00'
    },
    {
      especialidade: 'Ressonância Magnética',
      semArcaSaude: 'a partir de R$ 600,00',
      comArcaSaude: 'a partir de R$ 250,00'
    },
    {
      especialidade: 'Tomografia Computadorizada',
      semArcaSaude: 'a partir de R$ 340,00',
      comArcaSaude: 'a partir de R$ 120,00'
    },
    {
      especialidade: 'Ultrassom de Abdômem Total',
      semArcaSaude: 'a partir de R$ 180,00',
      comArcaSaude: 'a partir de R$ 85,00'
    },
    {
      especialidade: 'Raio-X',
      semArcaSaude: 'a partir de R$ 70,00',
      comArcaSaude: 'a partir de R$ 25,00'
    },
    {
      especialidade: 'Mamografia Digital',
      semArcaSaude: 'a partir de R$ 200,00',
      comArcaSaude: 'a partir de R$ 70,00'
    },
    {
      especialidade: 'Endoscopia',
      semArcaSaude: 'a partir de R$ 350,00',
      comArcaSaude: 'a partir de R$ 130,00'
    },
    {
      especialidade: 'Colonoscopia',
      semArcaSaude: 'a partir de R$ 580,00',
      comArcaSaude: 'a partir de R$ 255,00'
    },
    {
      especialidade: 'Papanicolau',
      semArcaSaude: 'a partir de R$ 45,00',
      comArcaSaude: 'a partir de R$ 20,00'
    },
    {
      especialidade: 'Mapeamento de Retina',
      semArcaSaude: 'a partir de R$ 150,00',
      comArcaSaude: 'a partir de R$ 25,00'
    },
    {
      especialidade: 'Mapa 24h',
      semArcaSaude: 'a partir de R$ 220,00',
      comArcaSaude: 'a partir de R$ 70,00'
    },
    {
      especialidade: 'Audiometria Tonal e Vocal',
      semArcaSaude: 'a partir de R$ 120,00',
      comArcaSaude: 'a partir de R$ 30,00'
    }
  ];


  filtroEspecialidade: string = '';

  // Filtro de especialidade
  filterEspecialidade(especialidade: any): boolean {
    if (this.filtroEspecialidade.trim() === '') {
      return true;
    } else {
      return especialidade.especialidade
        .toLowerCase()
        .includes(this.filtroEspecialidade.toLowerCase());
    }
  }

}



