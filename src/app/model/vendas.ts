import { Usuario } from './usuario';
import { Contatos } from './contatos';

export interface Vendas {
    idVenda: number;
    nome: string;
    numero: string;
    email: string;
    cpf: string;
    dataNascimento: Date;
    valor: number;
    horaVenda: Date;
    usuario: Usuario;
    contatos: Contatos;
}
