import { Component, OnInit } from '@angular/core';
import { HomeFacade } from '../../home.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public facade: HomeFacade) { }

  ngOnInit(): void {
    this.facade.listarCardapio()
  }

}
