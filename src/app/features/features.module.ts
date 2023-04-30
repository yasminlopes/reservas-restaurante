import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/containers/home/home.component';
import { CardapioComponent } from './home/components/cardapio/cardapio.component';
import { ReservaComponent } from './reserva/containers/reserva/reserva.component';
import { ReservaChatComponent } from './reserva/containers/reserva-chat/reserva-chat.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReservaListagemComponent } from './reserva/components/reserva-listagem/reserva-listagem.component';
import { LoginComponent } from './login/container/login/login.component';
import { ReservaHistoricoComponent } from './reserva/components/reserva-historico/reserva-historico.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardapioComponent,
    ReservaComponent,
    ReservaChatComponent,
    ReservaListagemComponent,
    LoginComponent,
    ReservaHistoricoComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class FeaturesModule { }
