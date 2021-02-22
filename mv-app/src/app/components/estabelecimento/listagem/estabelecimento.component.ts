import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import EstabelecimentoApi from 'src/app/api/estabelecimento-api';
import EstabelecimentoDTO from 'src/app/dto/estabelecimento-dto';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.scss']
})
export class EstabelecimentoComponent implements OnInit {


  api!: EstabelecimentoApi;  
  estabelecimento!: EstabelecimentoDTO[];
  displayedColumns: string[] = ['Nome', 'Endereco', 'Telefone'];
  estabelecimentoFilter: EstabelecimentoDTO = new EstabelecimentoDTO();


  constructor(httpClient: HttpClient) {
    this.api = new EstabelecimentoApi(httpClient);
   }

   getEstabelecimentoFromApi(estabelecimento: EstabelecimentoDTO[]){    
    this.estabelecimento = estabelecimento; 
    console.log(this.estabelecimento);   
  }

  ngOnInit(): void {
    this.api.getEstabelecimento(this.estabelecimentoFilter).then(r => {
      this.getEstabelecimentoFromApi(r as []);
    })
  }

}
