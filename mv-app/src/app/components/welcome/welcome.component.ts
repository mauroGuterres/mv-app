import { Component, NgModule, OnInit } from '@angular/core';
import ProfissionalApi from '../../api/profissional-api';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  api!: ProfissionalApi;
  constructor(httpClient: HttpClient) {
    this.api = new ProfissionalApi(httpClient);
    this.api.getProfissional();
   }

  ngOnInit(): void {
  }

}
