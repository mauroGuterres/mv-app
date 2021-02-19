import EstabelecimentoDTO from "./estabelecimento-dto";

export default class ProfissionalDTO{
    id!: Number;
    endereco!: String;
    celular!: String;
    funcao!: String;
    nome!: String
    telefoneResidencial!: String
    estabelecimento!: EstabelecimentoDTO[];
}