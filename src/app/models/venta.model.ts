export interface Cliente {
  id: String,
  fecha: String,
  numero: String,
  cliente: String,
  total: number
  detalles: [{
    producto: String,
    cantidad: number,
    total: number
  }]
}
