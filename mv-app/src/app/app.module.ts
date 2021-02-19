import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { NavigatorComponent } from './components/navigator/navigator.component';
import { LayoutModule } from '@angular/cdk/layout';
import {HttpClientModule} from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EstabelecimentoComponent } from './components/estabelecimento/estabelecimento.component';
import { ProfissionalComponent } from './components/profissional/profissional.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    AboutComponent,
    WelcomeComponent,
    EstabelecimentoComponent,
    ProfissionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavigatorComponent]
})
export class AppModule { }
