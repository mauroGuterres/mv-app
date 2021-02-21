import EstabelecimentoDTO from "./estabelecimento-dto";

export default class ProfissionalDTO{
    id!: Number | null;
    endereco!: String | null;
    celular!: String | null;
    funcao!: String | null;
    nome!: String | null
    telefoneResidencial!: String | null
    estabelecimento!: EstabelecimentoDTO[] | [];    

    constructor(){
        this.id = null;
        this.endereco = null;
        this.celular = null;
        this.funcao = null;
        this.nome = null;
        this.telefoneResidencial = null;
        this.estabelecimento = [];
    }
}


