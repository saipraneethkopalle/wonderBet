import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  currentUserName:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.currentUserName =this.apiService.getUserName();
     document.body.style.backgroundColor="#f0ece1";
  }
clicked() {
  console.log('cliecket')
}
}
