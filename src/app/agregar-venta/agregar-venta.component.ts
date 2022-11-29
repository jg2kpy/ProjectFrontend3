import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setupTestingRouterInternal } from '@angular/router/testing';
import { Detalles } from '../models/detalles.model copy';
import { Producto } from '../models/producto.model';
import { Venta } from '../models/venta.model';
import { ProductosService } from '../service/productos.service';
import { VentasService } from '../service/ventas.service';


@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent implements OnInit {

  fecha: String = "";
  listaVentas: Venta[] = [];
  cliente: String = ""
  total: number = 0
  listaDetalles: Detalles[] = []
  masDetalles = 0
  listaProductos: Producto[] = []
  

  constructor(
    private ventasService: VentasService,
    private productosService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listaVentas = this.ventasService.getVentas()
    this.listaProductos = this.productosService.getProductos()
  }

  nuevoDetalle(){
    const detalle = new Detalles()
    detalle.cantidad = 0
    detalle.producto = ""
    detalle.total = 0

    this.listaDetalles.push(detalle)
  }

  asignarProducto(detalle:Detalles , value: any){
    detalle.producto = value
  }


  guardar() {
    console.log('guardar');
    // parseamos la fecha


    let venta: Venta = {
      id: this.listaVentas[this.listaVentas.length-1].id + 1,
      fecha: this.fecha,
      numero: this.listaVentas[this.listaVentas.length-1].numero + 1,
      cliente: this.cliente,
      detalles: this.listaDetalles,
      total: this.total,
    }

    let result = this.ventasService.addVenta(venta);
    if (result == null) {
      alert('El codigo ya está en uso');
    } else {
      alert('Se guardo correctamente')
      this.router.navigate(['/ventas']);
    }
    this.listaVentas = this.ventasService.getVentas()

  };

  verificarTotal(detalle: Detalles){
    this.total -= detalle.total
    let index = this.listaProductos.map(x => x.codigo).indexOf(detalle.producto)

    detalle.total = detalle.cantidad * this.listaProductos[index].precioVenta
    this.total += detalle.total
  }

  limpiar() {
    this.fecha = "";
    this.cliente = "";
    this.total = 0;
    this.listaDetalles = [];
  }

}
