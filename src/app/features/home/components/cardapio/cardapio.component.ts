import { Component, OnInit, Input } from '@angular/core';
import Swiper from 'swiper';
import { Cardapio } from '../../models/cardapio';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  @Input() cardapio: Cardapio[] | null;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}