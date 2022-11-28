import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor() {}

  getClientes(): Cliente[] {
    return JSON.parse(localStorage.getItem('listaClientes') || '');
  }

  //TODO: Verificar que no se repite ruc o email
  addCliente(agregar: Cliente): Cliente {
    let clientes: Cliente[] = this.getClientes();
    clientes.push(agregar);
    localStorage.setItem('listaClientes', JSON.stringify(clientes));
    return agregar;
  }

  //TODO: Verificar exista con ese RUC
  updateCliente(actualizado: Cliente): Cliente[] {
    let clientes: Cliente[] = this.getClientes();
    let cliente = clientes.filter((cliente) => cliente.ruc == actualizado.ruc)
    cliente[0] = actualizado
    return clientes;
  }

  //TODO: Verificar exista con ese RUC
  deleteCliente(eliminar: Cliente): Cliente[] {
    let clientes: Cliente[] = this.getClientes();
    clientes.splice(clientes.indexOf(eliminar))
    return clientes;
  }
}
