import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  currentUserName:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.currentUserName =this.apiService.getUserName();
    document.body.style.backgroundColor="#f0ece1";
  }

}
