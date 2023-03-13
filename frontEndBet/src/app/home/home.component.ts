import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiServicesService } from '../api-services.service';
import { SocketServiceService } from '../socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accountDetails:any=[{account:"main",accountType:"SUA",creditRef:"60,00,000",balance:"60,000,000",exposure:"0.00",availBal:"6,00,00,000",playerBal:"2,00,000",refPL:"4,34,00,345",status:"Active"}];
  error:any = {};
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
  pwdError:any;
  isFirst:any;
  isSubmitted:any=false;
  validCode:any;
  constructor(private apiService:ApiServicesService,private socket:SocketServiceService) { }
  userData: any;
  roomName:any;
  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
    this.currentroleId =this.apiService.getUserLevel();
    this.socket.leaveRoom(this.apiService.getUserName(), this.apiService.getId());
    this.socket.enterRoom(this.apiService.getUserName() + "/" + this.apiService.getId());
    this.apiService.getLevelDetails().subscribe((res:any)=>{
      this.levels=res.data;
      this.childRoleData = res.data[this.currentroleId]
      this.shortCut = this.childRoleData?.userShortCut
    this.getAdmin();
    this.apiService.getAllUsers().subscribe((res:any)=>{
          if (res && res.data) {
            this.userData = res.data.map((items: { userName: any }):any => items.userName);
          }
        });
    })
  }

  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): any => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.pristine || confirmPassword?.pristine) {
      return null;
    }

    return password?.value === confirmPassword?.value ? null : { 'notmatched': true };
  };


  passwordForm = new FormGroup({
    password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$')])
  })
  superUserForm=new FormGroup({
    site:new FormControl('',[Validators.required]),
    // email:new FormControl('',[Validators.required]),
    userName:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9_.-]*$/)]),
    password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$')]),
    confirmPassword:new FormControl('', [Validators.required]),
    firstName:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9_.-]*$/)]),
    lastName:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_.-]*$/)]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(12), Validators.pattern('[- +()0-9]+')]),
    timezone:new FormControl('',)
  }, { validators: this.passwordMatchingValidatior });



  validateuser(value: any) {
    console.log("this.userData", this.userData);

    if(this.userData && this.userData?.includes(value.target.value)) {
      this.error.invalidUser = true;
    } else {
      this.error.invalidUser = false;
    }
  }


  get userName() { return this.superUserForm.get('userName') }
  get password() { return this.superUserForm.get('password') }
  get confirmPassword() { return this.superUserForm.get('conformPassword') }
  get firstName() { return this.superUserForm.get('firstName') }
  get lastName() { return this.superUserForm.get('lastName') }
  get phone() { return this.superUserForm.get('phone') }
  get timeZone() { return this.superUserForm.get('timezone') }
  get site() { return this.superUserForm.get('site') }

  createAdmin(){
    console.log("this.superUserForm", this.superUserForm);
    console.log("document.getElementsByClassName('ng-invalid')", document.getElementsByClassName('ng-invalid'));

    if(this.superUserForm.valid){
      this.error = "";
    let payload={
      website:this.superUserForm.value.site,
      // email:this.superUserForm.value.email,
      userName:this.superUserForm.value.userName,
      password:this.superUserForm.value.password,
      confirmPassword:this.superUserForm.value.confirmPassword,
      firstName:this.superUserForm.value.firstName,
      lastName:this.superUserForm.value.lastName,
      phone:this.superUserForm.value.phone,
      userRoleId:this.childRoleData?.userId,
      createdBy:this.loggedUser,
      default:true
    }
    this.apiService.createSuperUser(payload).subscribe((res:any)=>{
      Swal.fire({
        title:"Created"+ this.childRoleData?.userName+" !",
        text:"Successfully Created!"
      })
      this.superUserForm.reset();
      this.getAdmin();
      document.getElementById('close')?.click();
    })
  }else{
    this.error="Please fill mandatory fields!";
  }
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
  updateUserStatus() {
    let payload :any= {userName:this.currentUser.userName};
    let password = {password:this.passwordForm.value.password}
    if(password.password==this.currentUser.password ) {
      if(this.currentStatus!=undefined) {
      console.log("jfjdf",this.currentStatus)
      if(this.currentStatus==0 ) {
        payload.userstatus='Active'

      } else if(this.currentStatus==1){
        payload.userstatus = 'Suspended'
      }else{
        payload.userstatus ='Locked'
      }
      console.log("payload is ",payload)
      this.apiService.updateUserState(payload).subscribe((res:any)=>{
        Swal.fire({
          title:'Updated!',
          text:'Update Successfully!',
          timer:1500
        })
        this.getAdmin();
        this.passwordForm.reset();
        document.getElementById('sclose')?.click();
      })

    } else {
      console.log("fhdsaf")
    }
  } else {
    this.passError='Invalid Password'
  }


  }
  ngOnDestroy() {
    this.socket.destorySocket('active-'+this.roomName);
  }
}
