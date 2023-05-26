import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CursosComponent } from './cursos/cursos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { VueComponent } from './vue/vue.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { HttpClientModule } from '@angular/common/http';
import { MateriaisComponent } from './materiais/materiais.component';
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    CursosComponent,
    AngularComponent,
    ReactComponent,
    VueComponent,
    ConteudoComponent,
    HomeComponent,
    AvaliacaoComponent,
    MateriaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
