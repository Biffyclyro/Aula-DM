import { Injectable } from '@angular/core';
import {Cliente} from '../../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteDaoService {

  constructor() { }

  inserir(cliente: Cliente) {
    console.log('Nome: ', cliente.nome, 'Onde deixar', cliente.ondeDeixar);

  }
}
