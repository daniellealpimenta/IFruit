import {Produto} from "./Produtos"

interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    dataCriacao: Date;
    produtos?: Produto[];
}

export {Categoria}