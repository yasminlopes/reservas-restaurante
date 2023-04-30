import { Component, OnInit } from '@angular/core';
import { COLUNAS_LISTAGEM_RESERVAS } from '../../models/reserva-colunas.model';
import { ReservaFacade } from '../../reserva.facade';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})

export class ReservaComponent implements OnInit {

  public colunasListagem = COLUNAS_LISTAGEM_RESERVAS;
  
  constructor(public facade: ReservaFacade){}

  ngOnInit(): void {
    this.facade.listarUltimasReservas();
    this.facade.listarReservas();
  }
  
}
