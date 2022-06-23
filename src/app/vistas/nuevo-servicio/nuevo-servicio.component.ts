import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ServicioI} from '../../modelos/servicio.interface';
import { ApiService} from '../../servicios/api/api.service';

@Component({
  selector: 'app-nuevo-servicio',
  templateUrl: './nuevo-servicio.component.html',
  styleUrls: ['./nuevo-servicio.component.css']
})
export class NuevoServicioComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  
  NuevoForm = new FormGroup({
    servicio_tipo_id: new FormControl(''),
    nombre : new FormControl(''),
    fecha_de_adquisicion: new FormControl(''),
    fecha_de_expiracion: new FormControl(''),
    token: new FormControl(''),
    id:new FormControl('')
  });
  ngOnInit(): void {
    let token = this.getToken()
  }
  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:ServicioI){
    this.api.postServicios(form).subscribe(data=>{
      this.router.navigate(['servicios']);
      console.log(data);
    })

  }

}
