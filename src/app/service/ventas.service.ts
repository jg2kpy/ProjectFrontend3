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
    if (ventas.some((venta) => venta.id == agregar.id)) {
      return null;
    }
    ventas.push(agregar);
    localStorage.setItem('listaVentas', JSON.stringify(ventas));
    return ventas;
  }

  updateVenta(actualizado: Venta): Venta[] | null {
    let ventas: Venta[] = this.getVentas();
    let venta = ventas.filter((venta) => venta.id == actualizado.id)
    if (venta.length == 0) {
      return null;
    }
    venta[0] = actualizado
    return ventas;
  }

  deleteVenta(eliminar: Venta): Venta[] | null {
    let ventas: Venta[] = this.getVentas();
    let pos_venta = ventas.indexOf(eliminar);
    if (pos_venta == -1) {
      return null;
    }
    ventas.splice(pos_venta)
    return ventas;
  }
}
