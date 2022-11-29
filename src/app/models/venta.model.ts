import { Producto } from "./producto.model";


export class Venta {
    id!: number;
    fecha!: Date;
    nroFactura!: number;
    rucCliente!: String;
    total!: number;
    listaDetalles: DetalleVenta[] = [];
}

export class DetalleVenta {
  producto!: Producto;
  cantidad!: number;
  subtotal!: number;
}
