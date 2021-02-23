import {HttpClient} from "@angular/common/http";
import EstabelecimentoDTO from "../dto/estabelecimento-dto";


export default class EstabelecimentoApi{

    httpClient: HttpClient;
    profissionais!: EstabelecimentoDTO[];
    baseUrl: string = "http://localhost:8080/"

    constructor(httpClient: HttpClient){                        
        this.httpClient = httpClient;        
    }

    getEstabelecimento(ef: EstabelecimentoDTO): Promise<void | EstabelecimentoDTO[]>{
        //used post method cause it needs a body
        //just couldn't with get....        
        let result = this.httpClient.post<EstabelecimentoDTO[]>(this.baseUrl + "estabelecimento/buscar/0/10", ef).toPromise<EstabelecimentoDTO[]>().then<EstabelecimentoDTO[]>((results) => {             
             return results;
        }).catch(e => console.log(e));            
        return result;
    }

    getEstabelecimentoById(Id: Number): Promise<void | EstabelecimentoDTO>{
        let result = this.httpClient.get<EstabelecimentoDTO>(this.baseUrl + "estabelecimento/get/" + Id).toPromise<EstabelecimentoDTO>().then(results => {
            return results;
        });
        return result;
    }

    saveEstabelecimento(estabelecimento: EstabelecimentoDTO): Promise<void | String>{
        let result = this.httpClient.post<String>(this.baseUrl + "estabelecimento/cadastrar", estabelecimento).toPromise<String>().then<String>(r => {
            return r as String;
        });
        return result;
    }
    
}