import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cardapio } from '../models/cardapio';

@Injectable({
  providedIn: 'root',
})

export class CardapioState {
  public cardapio = new BehaviorSubject<Cardapio[]>([]);
}