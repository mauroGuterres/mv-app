import { Component, OnInit } from '@angular/core';
import ProfissionalDTO from 'src/app/dto/profissional-dto';
import ProfissionalApi from 'src/app/api/profissional-api';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss']
})
export class ProfissionalComponent implements OnInit {

  api!: ProfissionalApi;  
  profissional!: ProfissionalDTO[];
  displayedColumns: string[] = ['actions','Nome', 'Endereco', 'Celular', 'Funcao'];
  profissionalFilter: ProfissionalDTO = new ProfissionalDTO();
  snackBar!: MatSnackBar;
  

  constructor(httpClient: HttpClient, snackBar: MatSnackBar) {
    this.api = new ProfissionalApi(httpClient);    
    this.snackBar = snackBar;
   }

   getProfissionalFromApi(profissional: ProfissionalDTO[]){    
    this.profissional = profissional; 
    console.log(this.profissional);   
  }

  removeProfissional(Id: Number){
    if(window.confirm("Excluir profissional?")){
      this.api.removeProfissional(Id).then(r => {      
        this.snackBar.open(r + "", "Entendido!");
        this.profissional = this.profissional.filter(f=> {
         return f.id != Id;
        });
      });
    }
    
  }

  ngOnInit(): void {    
    this.api.getProfissional(this.profissionalFilter).then(r => {     
     this.getProfissionalFromApi(r as ProfissionalDTO[]);
    });
  }

}
