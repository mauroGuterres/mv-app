export default class EstabelecimentoDTO{
        id!: Number;
        endereco!: String | null;
        telefone!: String | null;
        profissional!: String | null;
        nome!: String | null

        constructor(){
                this.id = 0;
                this.endereco = null;
                this.telefone = null;
                this.profissional = null;
                this.nome = null;

        }
}