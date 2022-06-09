import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoServicioComponent } from './vistas/nuevo-servicio/nuevo-servicio.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { ListarServiciosComponent } from './vistas/listar-servicios/listar-servicios.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'nuevoServicio', component:NuevoServicioComponent},
  {path:'editar/:id', component:EditarComponent}, 
  {path:'servicios', component:ListarServiciosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NuevoServicioComponent,EditarComponent]; 
