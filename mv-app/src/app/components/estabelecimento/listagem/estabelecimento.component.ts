import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
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
  displayedColumns: string[] = ['actions','Nome', 'Endereco', 'Telefone'];
  estabelecimentoFilter: EstabelecimentoDTO = new EstabelecimentoDTO();
  snackBar!: MatSnackBar;
  matDialog!: MatDialog;


  constructor(httpClient: HttpClient, snackBar: MatSnackBar, matDialog: MatDialog) {
    this.api = new EstabelecimentoApi(httpClient);
    this.snackBar = snackBar;
    this.matDialog = matDialog;
   }

   getEstabelecimentoFromApi(estabelecimento: EstabelecimentoDTO[]){    
    this.estabelecimento = estabelecimento; 
    console.log(this.estabelecimento);   
  }

  removeEstabelecimento(Id: Number){
    
    this.api.removeEstabelecimento(Id).then(r => {
      debugger;
      this.snackBar.open(r + "", "Entendido!");
      this.estabelecimento = this.estabelecimento.filter(f=> {
       return f.id != Id;
      });
    });
  }

  ngOnInit(): void {
    this.api.getEstabelecimento(this.estabelecimentoFilter).then(r => {
      this.getEstabelecimentoFromApi(r as []);
    })
  }

}
