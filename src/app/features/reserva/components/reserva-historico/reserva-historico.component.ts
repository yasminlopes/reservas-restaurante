import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReservaConcluida } from '../../models/reserva.model';

@Component({
  selector: 'app-reserva-historico',
  templateUrl: './reserva-historico.component.html',
  styleUrls: ['./reserva-historico.component.scss']
})
export class ReservaHistoricoComponent {

  @Input() ultimasReservas: ReservaConcluida[] | null;
  @Output() onFazerOutraReserva = new EventEmitter();
 
}
