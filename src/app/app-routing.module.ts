import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'productos/agregar',
    component: AgregarProductoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
