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
  currentSearch:any='';
  EdataList:any;

  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.getAdmin();
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

  getAdmin() {
    this.apiService.getSuperUser().subscribe((res:any)=>{
      console.log(res)
      res.data.map((rs:any)=>{
        rs.name=rs.userName
      })
      this.accountDetails = res.data;
      console.log(this.accountDetails)
      this.EdataList = res.data;
    })
  }

  searchValue(value:any){
    if(value.target.value != null && value.target.value != ""){
    this.currentSearch = value.target.value;
      this.accountDetails = this.accountDetails.filter((val:any)=>
        {
        val.name=val.userName
        if(val.name.toLowerCase().includes(value.target.value)){
          return val;
        }}
      );
    }else{
      this.accountDetails = this.EdataList
    }
  }
}
