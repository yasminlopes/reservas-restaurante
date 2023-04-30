import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/layouts/main/main.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { HomeComponent } from './features/home/containers/home/home.component';
import { ReservaComponent } from './features/reserva/containers/reserva/reserva.component';
import { ReservaChatComponent } from './features/reserva/containers/reserva-chat/reserva-chat.component';
import { LoginComponent } from './features/login/container/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./features/features.module').then((m) => FeaturesModule),
      },
      {
        path: 'reservas',
        component: ReservaComponent,
        loadChildren: () => import('./features/features.module').then((m) => FeaturesModule),
      },
      {
        path: 'criar-reserva',
        component: ReservaChatComponent,
        loadChildren: () => import('./features/features.module').then((m) => FeaturesModule),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
