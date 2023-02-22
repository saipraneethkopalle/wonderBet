import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accountDetails:any=[{account:"main",accountType:"SUA",creditRef:"60,00,000",balance:"60,000,000",exposure:"0.00",availBal:"6,00,00,000",playerBal:"2,00,000",refPL:"4,34,00,345",status:"Active"}];
  error:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
  }
  superUserForm=new FormGroup({
    site:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required]),
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    timezone:new FormControl('',[Validators.required])
  })
  createAdmin(){
    let payload={
      website:this.superUserForm.value.site,
      email:this.superUserForm.value.email,
      userName:this.superUserForm.value.userName,
      password:this.superUserForm.value.password,
      confirmPassword:this.superUserForm.value.confirmPassword,
      firstName:this.superUserForm.value.firstName,
      lastName:this.superUserForm.value.lastName,
      phone:this.superUserForm.value.phone
    }
    console.log("payload",payload);
    this.apiService.createSuperUser(payload).subscribe((res:any)=>{
      Swal.fire({
        title:"Created Super Admin",
        text:"Successfully Created!"
      })
    }
    // ,(error:any)=>{
    //     this.error = "Invalid details"
    // }
    )
  }
}
