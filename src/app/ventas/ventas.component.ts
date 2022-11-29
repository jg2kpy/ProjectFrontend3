import { Component, OnInit } from '@angular/core';
import { Venta } from '../models/venta.model';
import { VentasService } from '../service/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventaSeleccionada: Venta = new Venta();
  listaVentas: Venta[] = [];

  constructor(
    private ventasService: VentasService
  ) { }

  ngOnInit(): void {
    this.listaVentas = this.ventasService.getVentas();
  }

  setVenta(v: Venta): void{
    this.ventaSeleccionada = v
  }

}
