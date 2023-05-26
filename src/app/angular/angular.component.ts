import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {
  paginaAtual: string | undefined;
  origemAtual:string | undefined;

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    console.log('id: ', this.activatedRoute.snapshot.params)
    this.paginaAtual = this.activatedRoute.snapshot.params["pagina"]
    this.origemAtual = this.activatedRoute.snapshot.queryParams["origem"] != 'interno'? 'externo':'interno'
  }
}
