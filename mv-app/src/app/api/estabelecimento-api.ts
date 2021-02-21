import {HttpClient, HttpHandler, HttpParams, HttpParamsOptions, HttpXhrBackend} from "@angular/common/http";
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
    
}