import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent {

  @Input() paginaAtual:string | undefined;
  @Input() origemAtual:string | undefined;
  @Input() nomeCurso:string | undefined;

  
  longText:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet interdum dui. Nam hendrerit risus orci, vel suscipit mauris aliquam ut. Donec est nunc, pellentesque eget vestibulum quis, pharetra ac neque. Donec posuere orci non mauris sollicitudin, vitae bibendum urna semper. Nam vel maximus lacus. Curabitur pulvinar arcu purus. Fusce mattis dui vel dignissim interdum. Donec vitae suscipit metus."

  constructor(){}

  
  ngOnInit(){

  }
}
