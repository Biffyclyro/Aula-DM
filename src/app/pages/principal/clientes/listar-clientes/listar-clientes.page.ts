import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../../../core/model/cliente';
import {ClienteApiService} from '../../../../core/services/api/cliente-api.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.page.html',
  styleUrls: ['./listar-clientes.page.scss'],
})
export class ListarClientesPage implements OnInit {

  clientes: Cliente[];

  constructor(private clienteApiService: ClienteApiService) {
    this.clientes = this.clienteApiService.getClientes();
  }

  ngOnInit() {
  }

}
