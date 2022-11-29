import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    if(localStorage.getItem("listaClientes") == undefined){
      localStorage.setItem("listaClientes", '[{"ruc":"12345","nombreCompleto":"José Luis Junior Gutierrez Agüero","email":"jlgutierrez2000@hotmail.com"},{"ruc":"4794156","nombreCompleto":"Alejandro Nicolas Cabral Valdovinos","email":"jandronico@hotmail.com"},{"ruc":"4987654","nombreCompleto":"Jessica Carolina Alarcon Caballero","email":"jessicala182@fpuna.edu.py"},{"ruc":"4567894","nombreCompleto":"Francisco Alejandro Sanabria Zelaya","email":"frandepy@fpuna.edu.py"},{"ruc":"4789624","nombreCompleto":"Guillermo José Paiva Galeano","email":"guillepaga@fpuna.edu.py"}]')
    }
    if(localStorage.getItem("listaProductos") == undefined){
      localStorage.setItem("listaProductos", '[{"codigo":"abc","nombre":"Coca Cola en Lata","precioVenta":5000,"existencia":50},{"codigo":"abd123","nombre":"Coca cola 3lts","precioVenta":13000,"existencia":30},{"codigo":"abf156","nombre":"Pringles Papa Frita Barbacoa","precioVenta":19000,"existencia":19},{"codigo":"abr675","nombre":"Monster Blanco 600ml","precioVenta":12000,"existencia":10},{"codigo":"aby243","nombre":"Galletita Bono","precioVenta":6000,"existencia":25},{"codigo":"eee621","nombre":"Bad Dragon ","precioVenta":350000,"existencia":9}]')
    }
    if(localStorage.getItem("listaVentas") == undefined){
      localStorage.setItem("listaVentas", '[{"id": "abc","fecha": 1669680431972,"nroFactura": 1,"rucCliente": 12345,"total": 100,"listaDetalles": [{"producto": {"codigo":"abc","nombre":"Coca Cola en Lata","precioVenta":5000,"existencia":50},"cantidad": 2,"subtotal": 10000},{"producto": {"codigo":"def","nombre":"Pepsi en Lata","precioVenta":5000,"existencia":50},"cantidad": 2,"subtotal": 10000}]},{"id": "def","fecha": 1669680431972,"nroFactura": 2,"rucCliente": 12345,"total": 100,"listaDetalles": [{"producto": {"codigo":"abc","nombre":"Coca Cola en Lata","precioVenta":5000,"existencia":50},"cantidad": 2,"subtotal": 10000},{"producto": {"codigo":"def","nombre":"Pepsi en Lata","precioVenta":5000,"existencia":50},"cantidad": 2,"subtotal": 10000}]}]')
    }
  }
}
