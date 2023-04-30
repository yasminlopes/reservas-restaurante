import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/containers/home/home.component';
import { CardapioComponent } from './home/components/cardapio/cardapio.component';
import { LoginComponent } from './login/container/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    ReservaComponent,
    ReservaHistoricoComponent
    ReservaChatComponent,
    ReservaListagemComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    HomeComponent
  ]
})
export class FeaturesModule { }
