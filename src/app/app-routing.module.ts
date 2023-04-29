import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/layouts/main/main.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { HomeComponent } from './features/home/containers/home/home.component';

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
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
