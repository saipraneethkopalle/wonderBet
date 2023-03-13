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
  status:any;
  currentStatus:any;
  currentUser:any;
  passError:any;
  childRoleData:any;
  levels:any;
  currentroleId:any;
  loggedUser:any;
  shortCut:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
    this.currentroleId=localStorage.getItem('userRoleId')
    this.loggedUser = localStorage.getItem('userName');
    console.log("rd",this.currentroleId);
    this.apiService.getLevelDetails().subscribe((res:any)=>{
      this.levels=res.data;
      this.childRoleData = res.data[this.currentroleId]
      console.log(this.childRoleData)
      this.shortCut = this.childRoleData.userShortCut
    this.getAdmin();
    })
  }
  passwordForm = new FormGroup({
    password: new FormControl('',[Validators.required])
  })
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
      phone:this.superUserForm.value.phone,
      userRoleId:this.childRoleData?.userId,
      createdBy:this.loggedUser
    }
    console.log("payload",payload);
    this.apiService.createSuperUser(payload).subscribe((res:any)=>{
      Swal.fire({
        title:"Created Super Admin",
        text:"Successfully Created!"
      })
      this.getAdmin();
      document.getElementById('close')?.click();
    }
    // ,(error:any)=>{
    //     this.error = "Invalid details"
    // }
    )
  }

  getAdmin() {
    this.apiService.getSuperUser(this.childRoleData?.userId).subscribe((res:any)=>{
      console.log(res)
      res.data.map((rs:any)=>{
        rs.name=rs.userName
      })
      this.accountDetails = res.data;
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
        }else{
          return val;
        }
      }
      );
    }else{
      this.accountDetails = this.EdataList
    }
  }

  getUserByStatus(status:any){
    if (status.target.value === 'All') {
      this.accountDetails = this.EdataList;
    } else {
      this.accountDetails = this.EdataList.filter((val:any) =>{
      if(val.userstatus == status.target.value){
        return val;
      }}
      );
    }
  }
  getCurrentUser(data:any){
    this.currentUser = data;
  }
  changeStatus(data:any) {
    console.log("data is ",data)
       this.currentStatus=data;
  }
  // updateUserStatus() {
  //   let payload :any= {userName:this.currentUser.userName};
  //   let password = {password:this.passwordForm.value.password}
  //   if(password.password==this.currentUser.password ) {
  //     if(this.currentStatus!=undefined) {


  //     console.log("jfjdf",this.currentStatus)
  //     if(this.currentStatus==0 ) {
  //       payload.adminstatus='suspended'

  //     } else if(this.currentStatus==1){
  //       payload.adminstatus = 'locked'
  //     }
  //     console.log("payload is ",payload)
  //     this.apiService.updateUserState(payload).subscribe((res:any)=>{
  //     if(res.status) {
  //       Swal.fire({
  //         title:'Updated!',
  //         text:'Update Successfully!',
  //         timer:1500
  //       })
  //     }
  //     })

  //   } else {
  //     console.log("fhdsaf")
  //   }
  // } else {
  //   this.passError='Invalid Password'
  // }


  // }

  
}
