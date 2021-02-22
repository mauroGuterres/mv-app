import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProfissionalApi from 'src/app/api/profissional-api';
import ProfissionalDTO from 'src/app/dto/profissional-dto';

@Component({
  selector: 'app-profissional-add',
  templateUrl: './profissional-add.component.html',
  styleUrls: ['./profissional-add.component.scss']
})
export class ProfissionalAddComponent implements OnInit {

  profissional!: ProfissionalDTO;
  profissionalApi!: ProfissionalApi;
  shouldGetProfissional: boolean = false;
  Id: Number = 0;

  constructor(httpClient: HttpClient, route: ActivatedRoute) {    
    this.profissionalApi = new ProfissionalApi(httpClient);
    this.profissional = new ProfissionalDTO();
    route.params.subscribe(params => {
      this.shouldGetProfissional = params.id != undefined;
      this.Id = params.id;
      console.log(this.shouldGetProfissional);
    });
   }

   getProfissionalFromApi(Id: Number){
    this.profissionalApi.getProfissionalById(Id).then(r => {
     this.profissional = r as ProfissionalDTO;     
     console.log(this.profissional); 
    });
    
  }

  saveProfissional(){
    this.profissionalApi.saveProfissional(this.profissional).then(r => {
      console.log(r);
    });
  }

  ngOnInit(): void {
    if(this.shouldGetProfissional){
      this.getProfissionalFromApi(this.Id);
    }
  }

}
