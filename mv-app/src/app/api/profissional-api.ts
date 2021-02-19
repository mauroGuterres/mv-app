import {HttpClient, HttpHandler, HttpXhrBackend} from "@angular/common/http";
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

    getProfissional(): String{
        this.httpClient.options(this.baseUrl, {headers:{'‘Access-Control-Allow-Origin': "*", body: "{}"}});
        this.httpClient.get(this.baseUrl + "profissional/buscar/0/10").toPromise().then(r => {
            console.log(r);
        });        
        return "";
    }
    
}