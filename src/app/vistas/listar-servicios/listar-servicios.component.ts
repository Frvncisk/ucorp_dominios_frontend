import { ServicioI } from './../../modelos/servicio.interface';
import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../servicios/api/api.service';
import { Router} from '@angular/router';
import { ListaServicios} from '../../modelos/lista-servicios.interface';
@Component({
  selector: 'app-listar-servicios',
  templateUrl: './listar-servicios.component.html',
  styleUrls: ['./listar-servicios.component.css']
})
export class ListarServiciosComponent implements OnInit {

  servicios: ListaServicios[];

  constructor(private api:ApiService, private router:Router) {
    this.servicios=[];
    console.log(this.servicios);
  }

  ngOnInit(): void {
    this.api.getServicios().subscribe(data=>{
      this.servicios=data;
      console.log(data);
    });
  }

  editarServicios(id: any){
    this.router.navigate(['editar',id]);
  }
  nuevoServicio(){
    this.router.navigate(['nuevoServicio']);
  }
  

  



}
