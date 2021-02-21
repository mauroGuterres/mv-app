import {HttpClient, HttpHandler, HttpParams, HttpParamsOptions, HttpXhrBackend} from "@angular/common/http";
import { ComponentFactoryResolver } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import ProfissionalDTO from "../dto/profissional-dto";


export default class ProfissionalApi{

    httpClient: HttpClient;
    profissionais!: ProfissionalDTO[];
    baseUrl: string = "http://localhost:8080/"

    constructor(httpClient: HttpClient){                        
        this.httpClient = httpClient;        
    }

    getProfissional(pf: ProfissionalDTO): Promise<void | ProfissionalDTO[]>{
        //used post method cause it needs a body
        //just couldn't with get....        
        let result = this.httpClient.post<ProfissionalDTO[]>(this.baseUrl + "profissional/buscar/0/10", pf).toPromise<ProfissionalDTO[]>().then<ProfissionalDTO[]>((results) => {             
             return results;
        }).catch(e => console.log(e));            
        return result;
    }
    
}