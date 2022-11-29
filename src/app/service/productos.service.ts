import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor() { }

  getProductos(): Producto[] {
    return JSON.parse(localStorage.getItem('listaProductos') || '');
  }

  addProducto(agregar: Producto): Producto[] | null {
    let productos: Producto[] = this.getProductos();
    console.log(productos);
    if (productos.some((producto) => producto.codigo === agregar.codigo)) {
      return null;
    }
    productos.push(agregar);
    localStorage.setItem('listaProductos', JSON.stringify(productos));
    return productos;
  }

  updateProducto(actualizado: Producto): Producto[] | null {
    let productos: Producto[] = this.getProductos();
    let producto = productos.filter((producto) => producto.codigo === actualizado.codigo)
    if (producto.length == 0) {
      return null;
    }
    productos[productos.indexOf(producto[0])] = actualizado
    localStorage.setItem('listaProductos', JSON.stringify(productos));
    return productos;
  }

  deleteProducto(eliminar: Producto): Producto[] | null {
    let productos: Producto[] = this.getProductos();
    let producto = productos.filter((producto) => producto.codigo === eliminar.codigo)
    if (producto.length == 0) {
      return null;
    }
    productos.splice(productos.indexOf(producto[0]),1)
    localStorage.setItem('listaProductos', JSON.stringify(productos));
    return productos;
  }
}
