import { Component, OnInit } from '@angular/core';
import { HomeFacade } from '../../home.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public facade: HomeFacade, private router: Router) { }

  ngOnInit(): void {
    this.facade.listarCardapio()
  }

  public navegarParaCriarReserva(){
    this.router.navigateByUrl('/criar-reserva')
  }

}
