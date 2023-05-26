import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['./materiais.component.scss']
})
export class MateriaisComponent implements OnInit {

  apostilas: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listarApostilas();
  }

  listarApostilas() {
    const apiUrl = 'https://api.jsonbin.io/v3/b/646f6e698e4aa6225ea3fbd5';
    
    this.http.get(apiUrl).subscribe((response: any) => {
      this.apostilas = response.record;
   });
  }

}
