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
}
