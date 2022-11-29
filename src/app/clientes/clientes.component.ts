import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClientesService } from '../service/clientes.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clienteSeleccionado: Cliente = new Cliente();
  clienteAEditar: Cliente = new Cliente();
  listaClientes: Cliente[] = [];


  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.listaClientes = this.clientesService.getClientes();
  }

  setCliente(c: Cliente): void{
    this.clienteSeleccionado = c
    this.clienteAEditar = {...c}
  }

  editarCliente(){
    let listaAux = this.clientesService.updateCliente(this.clienteAEditar)
    if (listaAux == null ){
      alert('El ruc no existe, NO DEBERIA SALIR ESTE ERROR NUNCA')
    }else{
      alert('Se edito correctamente')
      this.listaClientes = listaAux;
    }
  }

  eliminarCliente(){
    let listaAux = this.clientesService.deleteCliente(this.clienteSeleccionado)
    if (listaAux == null ){
      alert('Hubo un error al eliminar el cliente')
    }else{
      alert('Se elimino correctamente')
      this.listaClientes = listaAux;
    }
  }

}
