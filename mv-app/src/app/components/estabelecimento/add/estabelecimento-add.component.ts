import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  snackBar!: MatSnackBar;

  constructor(httpClient: HttpClient, route: ActivatedRoute, snackBar: MatSnackBar) {    
    this.estabelecimentoApi = new EstabelecimentoApi(httpClient);
    this.estabelecimento = new EstabelecimentoDTO();
    this.snackBar = snackBar;
    route.params.subscribe(params => {
      this.shouldGetEstabelecimento = params.id != undefined;
      this.Id = params.id;      
    });
   }

   getEstabelecimentoFromApi(Id: Number){
     this.estabelecimentoApi.getEstabelecimentoById(Id).then(r => {
      this.estabelecimento = r as EstabelecimentoDTO;      
     });
     
   }

   saveEstabelecimento(){
     this.estabelecimentoApi.saveEstabelecimento(this.estabelecimento).then(r => {
       this.snackBar.open(r + "", "Entendido!");
       console.log(r);
     });
   }

  ngOnInit(): void {
    if(this.shouldGetEstabelecimento){
      this.getEstabelecimentoFromApi(this.Id);
    }
  }

}
