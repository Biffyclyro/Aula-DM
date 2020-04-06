import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../../../core/model/cliente';
import {ClienteDaoService} from '../../../../core/services/dao/cliente-dao.service';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.page.html',
  styleUrls: ['./cadastrar-clientes.page.scss'],
})
export class CadastrarClientesPage implements OnInit {

  novoCliente = new Cliente();

  constructor(private clienteDaoService: ClienteDaoService) { }

  ngOnInit() {
  }

  adicionarCliente(): void {
    this.clienteDaoService.inserir(this.novoCliente);
  }

}
