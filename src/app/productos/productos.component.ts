import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productoSeleccionado: Producto = new Producto();
  productoAEditar: Producto = new Producto();
  listaProductos: Producto[] = [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.listaProductos = this.productosService.getProductos();
  }

  setProducto(p: Producto): void{
    this.productoSeleccionado = p
    this.productoAEditar = {...p}
  }

  editarProducto(){
    let listaAux = this.productosService.updateProducto(this.productoAEditar)
    if (listaAux == null ){
      alert('El codigo no existe, NO DEBERIA SALIR ESTE ERROR NUNCA')
    }else{
      alert('Se edito correctamente')
      this.listaProductos = listaAux;
    }
  }

  eliminarProducto(){
    let listaAux = this.productosService.deleteProducto(this.productoSeleccionado)
    if (listaAux == null ){
      alert('Hubo un error al eliminar el producto')
    }else{
      alert('Se elimino correctamente')
      this.listaProductos = listaAux;
    }
  }
}
