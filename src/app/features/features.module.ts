import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/containers/home/home.component';
import { CardapioComponent } from './home/components/cardapio/cardapio.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardapioComponent
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
