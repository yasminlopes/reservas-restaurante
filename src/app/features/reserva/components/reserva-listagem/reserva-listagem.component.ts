import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItensConsumidos, ReservaConcluida } from '../../models/reserva.model';
import { COLUNAS_LISTAGEM_RESERVAS } from '../../models/reserva-colunas.model';
import { IColunas } from 'src/app/shared/interfaces/colunas.interfaces';

@Component({
  selector: 'app-reserva-listagem',
  templateUrl: './reserva-listagem.component.html',
  styleUrls: ['./reserva-listagem.component.scss']
})
export class ReservaListagemComponent {

  @Input() reservas: ReservaConcluida[] | null ;
  @Input() colunasListagem: IColunas | any;

  @Output() onDetalhes = new EventEmitter();
}
