import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../models/producto.model';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  codigo: String = "";
  nombre: String = "";
  precioVenta: number = 0;
  existencia: number = 0;

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('guardar');
    let producto: Producto = {
      codigo: this.codigo,
      nombre: this.nombre,
      precioVenta: this.precioVenta,
      existencia: this.existencia,
    }
    let result = this.productosService.addProducto(producto);
    if (result == null) {
      alert('El codigo ya está en uso');
    } else {
      alert('Se guardo correctamente')
      this.router.navigate(['/productos']);
    }
  };
  
  limpiar() {
    this.codigo = "";
    this.nombre = "";
    this.precioVenta = 0;
    this.existencia = 0;
  }

}
