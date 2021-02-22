import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import EstabelecimentoApi from 'src/app/api/estabelecimento-api';
import EstabelecimentoDTO from 'src/app/dto/estabelecimento-dto';


@Component({
  selector: 'app-estabelecimento-add',
  templateUrl: './estabelecimento-add.component.html',
  styleUrls: ['./estabelecimento-add.component.scss']
})
export class EstabelecimentoAddComponent implements OnInit {

  estabelecimento!: EstabelecimentoDTO;
  estabelecimentoApi!: EstabelecimentoApi;
  shouldGetEstabelecimento: boolean = false;
  Id: Number = 0;

  constructor(httpClient: HttpClient, route: ActivatedRoute) {
    this.estabelecimentoApi = new EstabelecimentoApi(httpClient);
    this.estabelecimento = new EstabelecimentoDTO();
    route.params.subscribe(params => {
      this.shouldGetEstabelecimento = params.id != undefined;
      this.Id = params.id;
      console.log(this.shouldGetEstabelecimento);
    });
   }

   getEstabelecimentoFromApi(Id: Number){
     this.estabelecimentoApi.getEstabelecimentoById(Id).then(r => {
      this.estabelecimento = r as EstabelecimentoDTO;      
     });
     
   }

  ngOnInit(): void {
    if(this.shouldGetEstabelecimento){
      this.getEstabelecimentoFromApi(this.Id);
    }
  }

}
