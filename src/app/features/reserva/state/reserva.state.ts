import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReservaConcluida } from '../models/reserva.model';

@Injectable({
  providedIn: 'root',
})

export class ReservasState {
  public reservasCliente = new BehaviorSubject<ReservaConcluida[]>([]);
  public ultimasReservas = new BehaviorSubject<ReservaConcluida[]>([]);
}