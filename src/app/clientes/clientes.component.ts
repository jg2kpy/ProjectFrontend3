import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../service/clientes.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    console.log(this.clientesService.getClientes())
  }
}
