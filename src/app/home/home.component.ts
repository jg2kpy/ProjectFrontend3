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
      localStorage.setItem("listaClientes", '[{"ruc": "12345", "nombreCompleto": "Jose Luis Junior Gutierrez Aguero", "email": "jlgutierrez2000@hotmail.com"}]')
    }
    if(localStorage.getItem("listaProductos") == undefined){
      localStorage.setItem("listaProductos", '[{"codigo": "abc","nombre": "Coca Cola","precioVenta": 5000,"existencia": 50}]')
    }
    if(localStorage.getItem("listaProductos") == undefined){
      localStorage.setItem("listaVentas", '[{"id":"1","fecha": "28/11/22","numero": "1","cliente": "12345","total": 5000."detalles":[{"producto":"abc","cantidad":1,"total":5000}]}]')
    }
  }
}
