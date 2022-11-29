import { Detalles } from "./detalles.model copy"

export class Venta {
  id!: number
  fecha!: String
  numero!: number
  cliente!: String
  total!: number
  detalles!: Detalles[]
}
