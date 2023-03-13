import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-adminsettings',
  templateUrl: './adminsettings.component.html',
  styleUrls: ['./adminsettings.component.css']
})
export class AdminsettingsComponent implements OnInit {
  pwdError:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
  }
  changePassword = new FormGroup({
    newPassword: new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required]),
    oldPassword: new FormControl('',[Validators.required]),
  })
  updatePassword(){
    if(this.changePassword.value.newPassword == this.changePassword.value.confirmPassword){
    let payload = {
      newPassword:this.changePassword.value.newPassword,
      oldPassword:this.changePassword.value.oldPassword
    }
    this.apiService.changePassword(payload).subscribe((res:any)=>{
    this.pwdError = ""
      Swal.fire({
        title:'Password updated successfully',
        text:'Password changed successfully',
        timer:2000
      })
    })
  }else{
    this.pwdError = "Password doesn't match"
  }
  }
}
