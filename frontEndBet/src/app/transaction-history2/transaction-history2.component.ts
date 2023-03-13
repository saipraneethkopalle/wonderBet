import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-transaction-history2',
  templateUrl: './transaction-history2.component.html',
  styleUrls: ['./transaction-history2.component.css']
})
export class TransactionHistory2Component implements OnInit {
  currentUserName:any;
  shortCut:any;
  selectedUser:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.currentUserName =this.apiService.getUserName()
    this.shortCut = localStorage.getItem('shortCut');
    this.selectedUser = localStorage.getItem('selectedUser');
  }

}
