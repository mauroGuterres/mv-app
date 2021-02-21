import { Component, OnInit } from '@angular/core';
import ProfissionalApi from '../../api/profissional-api';
import {HttpClient} from '@angular/common/http';
import ProfissionalDTO from 'src/app/dto/profissional-dto';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss']
})
export class ProfissionalComponent implements OnInit {

  api!: ProfissionalApi;  
  profissional!: ProfissionalDTO[];
  displayedColumns: string[] = ['Nome', 'Endereco', 'Celular', 'Funcao'];
  profissionalFilter: ProfissionalDTO = new ProfissionalDTO();
  

  constructor(httpClient: HttpClient) {
    this.api = new ProfissionalApi(httpClient);    
   }

   getProfissionalFromApi(profissional: ProfissionalDTO[]){    
    this.profissional = profissional; 
    console.log(this.profissional);   
  }

  ngOnInit(): void {    
    this.api.getProfissional(this.profissionalFilter).then(r => {     
     this.getProfissionalFromApi(r as ProfissionalDTO[]);
    });
  }

}
