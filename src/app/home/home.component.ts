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
  }
}
