import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  ruc: String = "";
  nombreCompleto: String = "";
  email: String = "";

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('guardar');
    let cliente: Cliente = {
      ruc: this.ruc,
      nombreCompleto: this.nombreCompleto,
      email: this.email,
    }
    let result = this.clientesService.addCliente(cliente);
    if (result == null) {
      alert('El ruc ya existe');
    } else {
      alert('Se guardo correctamente')
      this.router.navigate(['/clientes']);
    }
  };
  
  limpiar() {
    this.ruc = "";
    this.nombreCompleto = "";
    this.email = "";
  }
}
