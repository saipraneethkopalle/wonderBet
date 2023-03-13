import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiServicesService } from '../api-services.service';
import { SocketServiceService } from '../socket.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  validationCode:any;
  error:any;
  isAuthenticated=false;
  pwdError: any;
  isLogin=true;
  constructor(private router:Router,private apiService:ApiServicesService,private socket:SocketServiceService) { }
  register = new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(18),Validators.pattern(/[a-zA-Z0-9]/)]),
    password:new FormControl('',[Validators.required]),
    validationCode:new FormControl('')
  })
  get f() { return this.register.controls; }
  ngOnInit(): void {
  this.generateValidationCode()
  this.logout();
    this.apiService.getAuthStatusListner().subscribe((response) => {
      this.error = this.apiService.getError();
      // console.log("error message",this.isError);
      this.isLogin =this.apiService.getisLogin();
      if(this.error) {
        this.isAuthenticated = false;
      }
  });
  console.log("isLogin",this.isLogin);
  }
  generateValidationCode(){
    var val = Math.floor(1000 + Math.random() * 9000);
    this.validationCode = val;
  }
  homePage(){
    let payload = {userName:this.register.value.userName,password:this.register.value.password,validationCode:this.register.value.validationCode}
    if(this.validationCode == payload.validationCode){
    this.error=''
    this.apiService.login(payload);
    this.register.reset();
    this.avoidback();
    }else{
      this.error = "Invalid Code"
      this.generateValidationCode();
    }
  }

  validatePassword(pwd:any){
    var reg=[/[0-9]/, /[A-Z]/, /[a-z]/]
    var passwordOk=reg.every(function(r) { return r.test(pwd.target.value) });
    this.error=!passwordOk?"password is invalid":""
    this.pwdError=!passwordOk?"password is invalid":""
  }

  changePassword = new FormGroup({
    newPassword: new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$')]),
    confirmPassword:new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$')]),
    oldPassword: new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$')]),
  })

  updatePassword(){
    if(this.changePassword.value.newPassword == this.changePassword.value.confirmPassword){
    let payload = {
      newPassword:this.changePassword.value.newPassword,
      oldPassword:this.changePassword.value.oldPassword
    }
    console.log("payload", payload);

    this.apiService.changePassword(payload).subscribe((res:any)=>{
    this.pwdError = ""
      Swal.fire({
        title:'Password updated successfully',
        text:'Password changed successfully',
        timer:2000
      });
      this.router.navigate([""]);
    })
  }else{
    this.pwdError = "Password doesn't match"
  }
  }
  avoidback(){
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
    };

  }
  logout() {
    this.apiService.logout();

}

}
