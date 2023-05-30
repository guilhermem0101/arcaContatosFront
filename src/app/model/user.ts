import { Contatos } from './contatos';
import { Vendas } from "./vendas";

export interface User {
    uid: string;
    email: string;
    displayName: string;    
    emailVerified: boolean;
    vendas?: Vendas[];
    contatos?: Contatos[];
}