import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { AgregarVentaComponent } from './agregar-venta/agregar-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    HomeComponent,
    ProductosComponent,
    VentasComponent,
    AgregarProductoComponent,
    AgregarClienteComponent,
    AgregarVentaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
