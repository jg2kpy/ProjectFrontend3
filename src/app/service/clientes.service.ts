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

  addCliente(agregar: Cliente): Cliente[] | null {
    let clientes: Cliente[] = this.getClientes();
    if (clientes.some((cliente) => cliente.ruc == agregar.ruc)) {
      return null;
    }
    clientes.push(agregar);
    localStorage.setItem('listaClientes', JSON.stringify(clientes));
    return clientes;
  }

  updateCliente(actualizado: Cliente): Cliente[] | null {
    let clientes: Cliente[] = this.getClientes();
    let producto = clientes.filter(
      (producto) => producto.ruc == actualizado.ruc
    );
    if (producto.length == 0) {
      return null;
    }
    clientes[clientes.indexOf(producto[0])] = actualizado;
    localStorage.setItem('listaClientes', JSON.stringify(clientes));
    return clientes;
  }

  deleteCliente(eliminar: Cliente): Cliente[] | null {
    let clientes: Cliente[] = this.getClientes();
    let producto = clientes.filter((producto) => producto.ruc == eliminar.ruc);
    if (producto.length == 0) {
      return null;
    }
    clientes.splice(clientes.indexOf(producto[0]));
    localStorage.setItem('listaClientes', JSON.stringify(clientes));
    return clientes;
  }
}
