export default class EstabelecimentoDTO{
        id!: Number | null;
        endereco!: String | null;
        telefone!: String | null;
        profissional!: String | null;
        nome!: String | null

        constructor(){
                this.id = null;
                this.endereco = null;
                this.telefone = null;
                this.profissional = null;
                this.nome = null;

        }
}