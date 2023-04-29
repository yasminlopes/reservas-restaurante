import { Component, OnInit } from '@angular/core';
import { NAV_ITEMS } from './navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navItems = NAV_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
