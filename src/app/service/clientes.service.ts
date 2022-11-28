import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientes(): Cliente[] {
    return JSON.parse(localStorage.getItem("listaClientes") || "") ;
  }
}
