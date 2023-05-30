import { Usuario } from './usuario';

export interface Contatos {
    id: number;
    nomeC?: string;
    numeroC: string;
    comentarios?: string;
    ultimaLigacao?: Date;
    qtdLigacao: number;
    venda?: boolean;
    atendido?: boolean;
    usuario: Usuario;
}
