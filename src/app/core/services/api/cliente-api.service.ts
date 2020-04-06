import { Injectable } from '@angular/core';
import {Cliente} from '../../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {

  clientes: Cliente[] = [];
  constructor() {
    this.clientes.push(new Cliente(1, 'Júlia', 'caixa do correio'));
    this.clientes.push(new Cliente(2, 'Andressa', 'janela do quarto'));
    this.clientes.push( new Cliente(3, 'Renata', 'jogar no pátio'));
    this.clientes.push(new Cliente(4, 'Giovana', 'deixar no 202'));
  }

  getClientes(): Cliente[] {
    return this.clientes;
  }
}
