import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ApiServicesService } from '../api-services.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
err:any
currentUserName:any;
changepassword=new FormGroup({
  newPassword:new FormControl(''),
  confirmPassword:new FormControl(''),
  oldPassword:new FormControl('')
})
  constructor(private apiservice:ApiServicesService) { }

  ngOnInit(): void {
    this.currentUserName= this.apiservice.getUserName();
    document.body.style.backgroundColor="#f0ece1";
  }
  updatePassword(){
    if(this.changepassword.value.newPassword===this.changepassword.value.newPassword){
      let payload={
        newPassword:this.changepassword.value.newPassword,
        oldPassword:this.changepassword.value.oldPassword
      }
      this.apiservice.changePassword(payload).subscribe((res:any)=>{

      })
    }

  }


}
