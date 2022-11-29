import { Injectable } from '@angular/core';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor() { }

  getVentas(): Venta[] {
    return JSON.parse(localStorage.getItem('listaVentas') || '');
  }

  addVenta(agregar: Venta): Venta[] | null {
    let ventas: Venta[] = this.getVentas();
    console.log(ventas);
    if (ventas.some((venta) => venta.id === agregar.id)) {
      return null;
    }
    ventas.push(agregar);
    localStorage.setItem('listaVentas', JSON.stringify(ventas));
    return ventas;
  }
}
