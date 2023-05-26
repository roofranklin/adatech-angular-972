import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})

export class AvaliacaoComponent implements OnInit {

  valoresRecebidos: string[] = [];
  inscricaoObservable: Subscription | undefined;

  ngOnInit() {
    const observable = this.novoObservable();

    this.inscricaoObservable = observable.subscribe(
      valor => {
        this.valoresRecebidos.push(valor);
      },
      erro => {
        this.valoresRecebidos.push(erro);
      },
      () => {
        this.valoresRecebidos.push("O observable foi encerrado!");
      });
  }

  novoObservable(): Observable<string> {
    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;

    return new Observable<string>(observador => {
      setTimeout(() => {
        observador.next("Já passaram 15 segundos");
      }, 6 * segundo);

      setTimeout(() => {
        observador.next("Já passaram 30 segundos");

        //(Obs: erro finaliza o observable automaticamente)
        //DESCOMENTE LINHA ABAIXO PARA EMITIR ERRO 
        // observador.error("Erro no observable!");

        //DESCOMENTE LINHA ABAIXO PARA FINALIZAR O OBSERVABLE
        // observador.complete();
      }, 12 * segundo);

      setTimeout(() => {
        observador.next("Já passaram 45 segundos");
      }, 18 * segundo);

      setTimeout(() => {
        observador.next("Já passou um minuto");
      }, 24 * segundo);
    });
  }



}
