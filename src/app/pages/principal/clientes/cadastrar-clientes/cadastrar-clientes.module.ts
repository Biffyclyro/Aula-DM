import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarClientesPageRoutingModule } from './cadastrar-clientes-routing.module';

import { CadastrarClientesPage } from './cadastrar-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarClientesPageRoutingModule
  ],
  declarations: [CadastrarClientesPage]
})
export class CadastrarClientesPageModule {}
