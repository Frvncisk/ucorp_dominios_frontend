import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginI} from '../../modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/modelos/responserinterface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    nom_usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  errorStatus:boolean=false;
  errorMsj:any="";

  ngOnInit(): void {
    this.revisartoken();
  }
  revisartoken(){
    if (localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }


  onLogin(form:LoginI){
    this.api.loginBynomUsuario(form).subscribe(data=>{
      let dataResponse: ResponseI = data;
      if(dataResponse.status=='ok'){
        localStorage.setItem("token", dataResponse.token);
        this.router.navigate(['dashboard']);
      }else{
        if(dataResponse.status=='401'){
          this.errorStatus = true;
          this.errorMsj = "Usuario o contraseña invalidos"; //pendiente
        }
      }
    })
  }

}
