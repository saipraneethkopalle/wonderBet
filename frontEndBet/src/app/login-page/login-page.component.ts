import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from '../api-services.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  validationCode:any;
  error:any;
  constructor(private router:Router,private apiService:ApiServicesService) { }
  register = new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(18),Validators.pattern(/[a-zA-Z0-9]/)]),
    password:new FormControl('',[Validators.required]),
    validationCode:new FormControl('')
  })
  get f() { return this.register.controls; }
  ngOnInit(): void {
  this.generateValidationCode()

  }
  generateValidationCode(){
    var val = Math.floor(1000 + Math.random() * 9000);
    this.validationCode = val;
  }
  homePage(){
    let payload = {userName:this.register.value.userName,password:this.register.value.password,validationCode:this.register.value.validationCode}
    if(this.validationCode == payload.validationCode){
    this.error=''
    this.apiService.login(payload).subscribe((res:any)=>{
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("userName",res.data.userName);
      localStorage.setItem("userRoleId",res.data.userRoleId)
      this.router.navigate([""])
    })
    }else{
      this.error = "Invalid Code"
      this.generateValidationCode();
    }
  }

}
