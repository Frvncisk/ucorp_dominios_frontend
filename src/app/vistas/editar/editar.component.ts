import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ServicioI} from '../../modelos/servicio.interface';
import { ApiService} from '../../servicios/api/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  
  
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) {
  }

  datoServicio : ServicioI = {
    'servicio_tipo_id': '',
    'nombre' : '',
    'fecha_de_adquisicion': '',
    'fecha_de_expiracion': '',
    'id' : ''
  } ;
  editarForm = new FormGroup({
    servicio_tipo_id: new FormControl(''),
    nombre : new FormControl(''),
    fecha_de_adquisicion: new FormControl(''),
    fecha_de_expiracion: new FormControl(''),
    token: new FormControl(''),
    id:new FormControl('')
  });

  


  ngOnInit(): void {
    let servicioId = this.activerouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getSingleServicio(servicioId).subscribe(data=>{
   // this.datoServicio = data;
    console.log(data.data);
      this.editarForm.setValue({
        'servicio_tipo_id': data.data.servicio.servicio_tipo_id,
        'nombre' : data.data.servicio.nombre,
        'fecha_de_adquisicion': data.data.servicio.fecha_de_adquisicion,
        'fecha_de_expiracion': data.data.servicio.fecha_de_expiracion,
        'token': token,
        'id' : data.data.servicio.id
      });
      
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  GuardarDatos(form:ServicioI){
    this.api.putServicio(form).subscribe(data=>{
      console.log(data);
    });
    console.log(form);
  }

}
