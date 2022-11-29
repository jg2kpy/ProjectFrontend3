import { Component, OnInit } from '@angular/core';
import { Venta } from '../models/venta.model';
import { VentasService } from '../service/ventas.service';



@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventasCopia: Venta[] = [];
  listaVentas: Venta[] = [];
  fechaDesde: any;
  fechaHasta: any;
  rucCliente: any;
  mensajeErrorFiltro: string = '';

  constructor(
    private ventasService: VentasService
  ) { }

  ngOnInit(): void {
    this.listaVentas = this.ventasService.getVentas();
    this.ventasCopia = this.ventasService.getVentas();
  }

  getDetalles(venta: Venta){

  }

  // Filtrar por rango de fechas
  filtrar() {

    this.listaVentas = this.ventasCopia;

    if (this.fechaDesde > this.fechaHasta) {
      this.mensajeErrorFiltro =
        'Las fecha desde debe ser menor a la fecha hasta';
      return;
    } else if (
      (!this.fechaDesde && this.fechaHasta) ||
      (this.fechaDesde && !this.fechaHasta)
    ) {
      this.mensajeErrorFiltro = 'Debe colocar ambas fechas';
      return;
    }

    let nuevoVentas = [];
    let element: any;

    if (this.fechaDesde) {
      for (let index = 0; index < this.listaVentas.length; index++) {
        element = this.listaVentas[index];
        let date1 = new Date(element.fecha).getTime();
        let date2 = new Date(this.fechaDesde).getTime();
        let date3 = new Date(this.fechaHasta).getTime();

        console.log(date1, date2, date3);
        console.log(element.fecha,this.fechaDesde, this.fechaHasta);

        if (date1 >= date2 && date1 <= date3)
        nuevoVentas.push(this.listaVentas[index]);
      }
    } else {
      nuevoVentas = this.listaVentas;
    }

    if (this.rucCliente) {
      let aux2 = [];
      for (let index = 0; index < nuevoVentas.length; index++) {
        element = nuevoVentas[index];
        if (
          element.cliente
            .toLowerCase()
            .includes(this.rucCliente.toLowerCase())
        )
          aux2.push(element);
      }
      nuevoVentas = aux2;
    }

    this.listaVentas = nuevoVentas;
  }

  Limpiar() {
    this.rucCliente = '';
    this.fechaDesde = '';
    this.fechaHasta = '';
    this.filtrar();
  }
}
