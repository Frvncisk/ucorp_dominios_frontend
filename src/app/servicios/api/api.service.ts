import { ServicioI } from './../../modelos/servicio.interface';
import { Injectable } from '@angular/core';
import { LoginI} from '../../modelos/login.interface';
import { ResponseI} from '../../modelos/responserinterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaServicios} from '../../modelos/lista-servicios.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string="http://localhost:8000/api/"

  constructor(private http:HttpClient) { }

  loginBynomUsuario(form:LoginI):Observable<ResponseI>{
    let direccion =this.url+"login";
    return this.http.post<ResponseI>(direccion,form);

  }

  getServicios():Observable<ListaServicios[]>{
    let direccion= this.url + "servicios";
    let token = localStorage.getItem('token');
    return this.http.get<ListaServicios[]>(direccion,{
      headers:{
        'Authorization':'Bearer ' + token
      }
    });
  }

  getSingleServicio(id:any):Observable<ResponseI>{
    let direccion = this.url + "servicio/" + id;
    let token = localStorage.getItem('token');
    return this.http.get<ResponseI>(direccion,{
      headers:{
        'Authorization':'Bearer ' + token
      }
  });
}
  putServicio(form:ServicioI):Observable<ResponseI>{
    let direccion = this.url + "servicio/" + form.id;
    let token = localStorage.getItem('token');
    console.log(form);
    return this.http.put<ResponseI>(direccion, form);
    }

deleteServicio(form:ServicioI):Observable<ResponseI>{
  let direccion = this.url + "servicio/" + form.id;
  let token = localStorage.getItem('token');
  let Options={
    Headers: new HttpHeaders({
      'conten-type': 'application/json'
    }),
    body:form
  }
  return this.http.delete<ResponseI>(direccion, Options);
  }

  }
